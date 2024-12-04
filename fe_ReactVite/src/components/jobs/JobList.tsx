import React, { useState } from "react";
import { SampleJob } from "../../types";
import { JobCard } from "./JobCard";
import { JobModal } from "./JobModal";

interface JobListProps {
  jobs: SampleJob[];
}

export const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState<SampleJob | null>(null);

  if (jobs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          No jobs found matching your criteria
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} onSelect={setSelectedJob} />
        ))}
      </div>
      <JobModal
        job={selectedJob}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </>
  );
};
