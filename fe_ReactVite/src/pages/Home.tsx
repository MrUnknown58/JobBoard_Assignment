import React, { useEffect, useState } from "react";
import { JobFilters, SampleJob } from "../types";
import { CategoryGrid } from "../components/home/CategoryGrid";
import { Hero } from "../components/home/Hero";
import { Testimonials } from "../components/home/Testimonials";
import { JobList } from "../components/jobs/JobList";
import { Link } from "react-router-dom";
import { SkeletonCard } from "../components/JobsSkeleton";
import { SAMPLE_RES } from "../../constants/sample_res";
import { filterJobs } from "../utils/filters";

const Home = () => {
  const [filters, setFilters] = useState<JobFilters>({
    search: "",
    type: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState<SampleJob[]>([]);
  let allJobs = SAMPLE_RES.data;
  const handleSearch = React.useCallback(
    async (payload: { search: string; type: string }) => {
      try {
        setIsLoading(true);
        console.log("payload", payload);
        console.log("Inside handleSearch");
        const key = `${payload.search} in ${payload.type}`;
        const cachedData = localStorage.getItem(key);
        if (cachedData) {
          setFilteredJobs(JSON.parse(cachedData));
          allJobs = JSON.parse(cachedData);
          setIsLoading(false);
          return;
        }
        const job = await fetch(
          `${import.meta.env.VITE_BE_URL}/api/v1/jobs/find/${
            payload.search
          }?location=${payload.type}`
        );
        const job_json = await job.json();
        if (job_json.data.length === 0) {
          setFilteredJobs(SAMPLE_RES.data as SampleJob[]);
          localStorage.setItem(key, JSON.stringify(SAMPLE_RES.data));
        } else {
          setFilteredJobs(job_json.data);
          allJobs = job_json.data;
          localStorage.setItem(key, JSON.stringify(job_json.data));
        }
      } catch (e) {
        console.log(e);
      } finally {
        console.log("Finally");
        setIsLoading(false);
      }
    },
    []
  );
  useEffect(() => {
    const role = filters.search
      .toLowerCase()
      .split("(")[0]
      .trim()
      .split(" ")
      .join("-");
    const location = filters.type
      .toLowerCase()
      .split("(")[0]
      .trim()
      .split(" ")
      .join("-");
    const payload = {
      search: role != "" ? role : "frontend-engineer",
      type: location != "" ? location : "remote",
    };
    if (filteredJobs.length === 0) handleSearch(payload);
    else setFilteredJobs(filterJobs(allJobs, filters));
  }, [filters.search, filters.type, handleSearch]);

  return (
    <>
      <Hero filters={filters} onFilterChange={setFilters} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="py-12">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold mb-6">Recent Jobs Available</h2>
            <Link to={"/jobs"}>
              <span className="text-blue-400 hover:cursor-pointer hover:underline">
                {" "}
                View All
              </span>
            </Link>
          </div>
          {isLoading ? (
            <>
              <SkeletonCard />
            </>
          ) : (
            <JobList jobs={filteredJobs.slice(0, 6)} />
          )}
        </section>
        <CategoryGrid />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
