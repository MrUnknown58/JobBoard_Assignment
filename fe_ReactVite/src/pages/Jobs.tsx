import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SearchSidebar } from "../components/jobs/SearchSidebar";
import { JobList } from "../components/jobs/JobList";
import { TopCompanies } from "../components/jobs/TopCompanies";
import { JobFilters, SampleJob } from "../types";
import { filterJobs } from "../utils/filters";
import { SAMPLE_RES } from "../../constants/sample_res";
import { SkeletonCard } from "../components/JobsSkeleton";

export const Jobs: React.FC = () => {
  const [filters, setFilters] = useState<JobFilters>({
    search: "",
    type: "",
    sort: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [filteredJobs, setFilteredJobs] = useState<SampleJob[]>([]);
  let allJobs = SAMPLE_RES.data;
  // const filteredJobs = filterJobs(SAMPLE_RES.data as SampleJob[], filters);
  // switch
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
          allJobs = SAMPLE_RES.data;
          localStorage.setItem(
            key,
            JSON.stringify(filterJobs(allJobs as SampleJob[], filters))
          );
        } else {
          allJobs = job_json.data;
          setFilteredJobs(filterJobs(allJobs as SampleJob[], filters));
          localStorage.setItem(
            key,
            JSON.stringify(filterJobs(allJobs as SampleJob[], filters))
          );
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
      ?.toLowerCase()
      .split("(")[0]
      .trim()
      .split(" ")
      .join("-");
    const location = filters.type
      ?.toLowerCase()
      .split("(")[0]
      .trim()
      .split(" ")
      .join("-");
    const payload = {
      search: role != "" ? role : "frontend-engineer",
      type: location != "" ? location : "remote",
    };
    if (filteredJobs.length != 0) {
      setFilteredJobs(filterJobs(SAMPLE_RES.data as SampleJob[], filters));
      allJobs = SAMPLE_RES.data;
    } else handleSearch(payload);
  }, [filters.search, filters.type, handleSearch]);

  return (
    <>
      <div className="bg-gradient-to-r from-teal-500 to-blue-500 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center">Jobs</h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div>
            <SearchSidebar
              onFilterChange={setFilters}
              jobs={allJobs as SampleJob[]}
            />
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredJobs.length} jobs
              </p>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                onChange={(e) => {
                  setFilters({ ...filters, sort: e.target.value });
                }}
              >
                <option>Most Recent</option>
                <option>Most Relevant</option>
                <option>Highest Paid</option>
              </select>
            </div>

            {isLoading ? (
              <>
                <SkeletonCard />
              </>
            ) : (
              <JobList jobs={filteredJobs} />
            )}
          </div>
        </div>

        <TopCompanies />
      </main>
    </>
  );
};
