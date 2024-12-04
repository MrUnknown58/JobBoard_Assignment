import os
from dotenv import load_dotenv
from apify_client import ApifyClient
load_dotenv()

# Initialize the ApifyClient with your API token
api_key = os.getenv("APIFY_API_KEY")
client = ApifyClient(api_key)

# Prepare the Actor input
url=os.getenv("API_URL")
run_input = {
    "url": url,
    "page_limit": 1,
    "results_limit": 2,
    "only_companies": True,
    "get_company_details": True,
}

# Run the Actor and wait for it to finish
run = client.actor(os.get("ACTOR")).call(run_input=run_input)

# Fetch and print Actor results from the run's dataset (if there are any)
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)