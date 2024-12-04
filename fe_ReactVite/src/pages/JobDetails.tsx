import React from "react";
import { JobContent } from "../components/jobs/JobContent";
import { JobDetailsSidebar } from "../components/jobs/JobDetailsSidebar";
import { mockJobs } from "../data/mockJobs";

export const JobDetails: React.FC = () => {
  // In a real app, you'd get the job ID from the URL params
  const job = mockJobs[0]; // Using the first job as an example

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <JobContent job={job} />
        </div>
        <div>
          <JobDetailsSidebar job={job} />
        </div>
      </div>
    </main>
  );
};
