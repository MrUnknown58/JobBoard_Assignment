import React from "react";
import { SampleJob } from "../../types";
import { JobDetails } from "./JobDetails";

interface JobCardProps {
  job: SampleJob;
  onSelect: (job: SampleJob) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onSelect }) => {
  return (
    <div
      className="bg-white px-10 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onSelect(job)}
    >
      <div className="flex items-start gap-4">
        <img
          src={job.company_logo_url}
          alt={`${job.company_name} logo`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <JobDetails job={job} />
      </div>
    </div>
  );
};
