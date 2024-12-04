import React, { useEffect, useState } from "react";
import {
  getAllJobTitles,
  getExpLevels,
  getJobTypes,
  getJobSalary,
  filterJobs,
} from "../utils/filters";
import { SampleJob, JobFilters } from "../types";

const YourComponent = () => {
  const [jobs, setJobs] = useState<SampleJob[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<SampleJob[]>([]);
  const [jobTitles, setJobTitles] = useState<string[]>([]);
  const [expLevels, setExpLevels] = useState<string[]>([]);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [jobSalaries, setJobSalaries] = useState<string[]>([]);
  const [filters, setFilters] = useState<JobFilters>({
    search: "",
    type: "",
    sort: "",
  });

  useEffect(() => {
    // Fetch jobs data and set it
    // Example: setJobs(fetchedJobs);

    // Call the utility functions
    setJobTitles(getAllJobTitles(jobs));
    setExpLevels(getExpLevels(jobs));
    setJobTypes(getJobTypes(jobs));
    setJobSalaries(getJobSalary(jobs));
  }, [jobs]);

  useEffect(() => {
    setFilteredJobs(filterJobs(jobs, filters));
  }, [jobs, filters]);

  return <div>{/* Render your component */}</div>;
};

export default YourComponent;
