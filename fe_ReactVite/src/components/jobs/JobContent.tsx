import React from "react";
import { Job } from "../../types";

interface JobContentProps {
  job: Job;
}

export const JobContent: React.FC<JobContentProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">{job.company}</span>
          <span className="text-gray-600">{job.location}</span>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-3">Job Description</h3>
          <p className="text-gray-600">{job.description}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>
              Lead and coordinate project initiatives across multiple
              departments
            </li>
            <li>Develop and implement strategic business solutions</li>
            <li>
              Collaborate with stakeholders to define project scope and
              objectives
            </li>
            <li>Monitor project progress and ensure timely delivery</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>5+ years of experience in project management</li>
            <li>Strong analytical and problem-solving abilities</li>
            <li>Excellent communication and leadership skills</li>
            <li>Bachelor's degree in related field</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-3">Benefits</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Competitive salary and bonus structure</li>
            <li>Comprehensive health insurance</li>
            <li>Flexible working hours</li>
            <li>Professional development opportunities</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
