import asyncio
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict
import uvicorn

# Import the modified scraper
from utils.scraper_job import WellfoundJobScraper

app = FastAPI(
    title="Backend for JobBoard",
    description="",
    version=""
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
)

# Create a thread pool executor
executor = ThreadPoolExecutor(max_workers=3)

# In-memory cache for storing scraping results
scraping_cache = {}

class JobRequest(BaseModel):
    role: str = 'backend-engineer'
    location: Optional[str] = "india"
    num_pages: Optional[int] = 1

class ScrapeStatus(BaseModel):
    status: str
    job_count: Optional[int] = None
    message: Optional[str] = None

#  Use this for the fetch jobs endpoint 
@app.get("/api/v1/jobs/find/{role}", response_model=Dict)
async def get_jobs(role: str, location: Optional[str] = "remote", num_pages: Optional[int] = 2):
    
    data = await get_jobs_scrape(role=role, location=location, num_pages=num_pages)
    return {
        "status": "success",
        "data": data,
        "total_jobs": len(data)
    }



@app.get("/api/v1/jobs/{role}", response_model=Dict)
async def get_jobs(role: str, location: Optional[str] = "remote", num_pages: Optional[int] = 1):
    
    cache_key = f"{role}_{location}_{num_pages}"
    
    if cache_key in scraping_cache:
        cached_data = scraping_cache[cache_key]
        return {
            "status": "success",
            "timestamp": cached_data['timestamp'].isoformat(),
            "data": cached_data['data'],
            "total_jobs": len(cached_data['data'])
        }
    
    raise HTTPException(
        detail="No data found. Please initiate scraping first using the /scrape endpoint."
    )

@app.post("/api/v1/jobs/scrape", response_model=ScrapeStatus)
async def start_scraping(job_request: JobRequest, background_tasks: BackgroundTasks):
    cache_key = f"{job_request.role}_{job_request.location}_{job_request.num_pages}"
    
    if cache_key in scraping_cache:
        cached_data = scraping_cache[cache_key]
        if (datetime.now() - cached_data['timestamp']).seconds < 3600:
            return ScrapeStatus(
                status="completed",
                job_count=len(cached_data['data']),
                message="Retrieved from cache"
            )

    background_tasks.add_task(
        scrape_jobs_background,
        cache_key,
        job_request.role,
        job_request.location,
        job_request.num_pages
    )

    return ScrapeStatus(
        status="started",
        message="Scraping job started"
    )


async def scrape_jobs_background(cache_key: str, role: str, location: str, num_pages: int):
    
    try:
        scraper = WellfoundJobScraper()
        jobs = await asyncio.get_event_loop().run_in_executor(
            executor,
            scraper.get_job_listings,
            location,
            role,
            num_pages
        )
        scraping_cache[cache_key] = {
            'timestamp': datetime.now(),
            'data': jobs
        }
    except Exception as e:
        print(f"Error in background scraping: {str(e)}")
        scraping_cache[cache_key] = {
            'timestamp': datetime.now(),
            'data': [],
            'error': str(e)
        }

async def get_jobs_scrape(role: str, location: str, num_pages: int = 2):
    scraper = WellfoundJobScraper()
    jobs = await asyncio.get_event_loop().run_in_executor(
        executor,
        scraper.get_job_listings,
        location,
        role,
        num_pages
    )
    return jobs

@app.get("/api/v1/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import os
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv('PORT', 8000)), reload=True)