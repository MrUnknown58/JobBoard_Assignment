import React from "react";
import { CalendarDays, MapPin, Timer } from "lucide-react";
import clsx from "clsx";
import { SampleJob } from "../../types";
import { formatDate } from "../../utils/date";

interface JobDetailsProps {
  job: SampleJob;
  showFullDescription?: boolean;
}

export const JobDetails: React.FC<JobDetailsProps> = ({
  job,
  showFullDescription = false,
}) => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{job.job_title}</h3>
        <span className="flex flex-col gap-2">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-700">
            {job.job_type}
          </span>
        </span>
      </div>
      <div className="mt-2">
        <p className="text-gray-600 font-medium">{job.company_name}</p>
        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            {job.locations}
          </div>
          <div className="flex items-center gap-1">
            <Timer size={16} />
            {job.salary_max}
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            {formatDate(job.posted_date || new Date().toISOString())}
          </div>
          <div className="flex items-center gap-1">
            <span
              className={clsx(
                "px-2 py-1 text-xs font-medium rounded-full",
                job.actively_hiring
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              )}
            >
              {job.actively_hiring ? "Actively Hiring" : "Not Hiring"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600 font-medium">
              {job.required_experience}+ years
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600 font-medium">
              {job.company_size}
            </span>
          </div>
          <div className="flex items-center gap-1">
            {job.company_tags.split(", ").map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          {job.salary_max && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600 font-medium">
                {job.salary_max}
              </span>
            </div>
          )}
        </div>
      </div>

      <p
        className={clsx(
          "mt-4 text-gray-600",
          showFullDescription ? "" : "line-clamp-2"
        )}
      >
        {job.company_description}
      </p>
    </div>
  );
};
