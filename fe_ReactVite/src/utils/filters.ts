import { JobFilters, SampleJob } from "../types";

export const getAllJobTitles = (jobs: SampleJob[]): string[] => {
  const titleCounts = jobs.reduce((acc, job) => {
    acc[job.job_title] = (acc[job.job_title] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(titleCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6)
    .map(([title]) => title);
};

export const getExpLevels = (jobs: SampleJob[]): string[] => {
  const expCounts = jobs.reduce((acc, job) => {
    acc[job.required_experience] = (acc[job.required_experience] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(expCounts)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([level]) => level);
};

export const getJobSalary = (jobs: SampleJob[]): string[] => {
  const salaryRanges = jobs.reduce((acc, job) => {
    if (job.salary_min && job.salary_max) {
      const range = `${job.salary_min} - ${job.salary_max}`;
      acc[range] = (acc[range] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(salaryRanges)
    .sort(
      ([a], [b]) => parseInt(a.split(" - ")[0]) - parseInt(b.split(" - ")[0])
    )
    .map(([range]) => range);
};

export const getJobTypes = (jobs: SampleJob[]): string[] => {
  const typeCounts = jobs.reduce((acc, job) => {
    acc[job.job_type] = (acc[job.job_type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(typeCounts)
    .sort(([, a], [, b]) => b - a)
    .map(([type]) => type);
};

export const filterJobs = (
  jobs: SampleJob[],
  filters: JobFilters
): SampleJob[] => {
  console.log(jobs);
  // TODO: Later
  const j = jobs.filter((job) => {
    const matchesSearch =
      !filters.search ||
      job?.job_title?.toLowerCase().includes(filters.search.toLowerCase()) ||
      job?.company_name?.toLowerCase().includes(filters.search.toLowerCase()) ||
      job?.company_description
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());

    // locations: "Remote • India",
    const matchesType =
      !job.locations ||
      !filters.type ||
      job?.locations?.toLowerCase().includes(filters.type.toLowerCase());

    return matchesSearch && matchesType;
  });
  return j.sort((a, b) => {
    if (filters.sort === "Most Recent") {
      return (
        new Date(b.posted_date).getDate() - new Date(a.posted_date).getDate()
      );
    }
    if (filters.sort === "Most Relevant") {
      return (
        new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime()
      );
    }
    if (filters.sort === "Highest Paid") {
      if (a.salary_max && b.salary_max) return b?.salary_max - a?.salary_max;
    }
    return 0;
  });
  // return jobs as SampleJob[];
};
