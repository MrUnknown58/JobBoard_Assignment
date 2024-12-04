import React from "react";
import { MapPin, Building2, Clock, Calendar, Briefcase } from "lucide-react";
import { Job } from "../../types";

interface JobDetailsSidebarProps {
  job: Job;
}

export const JobDetailsSidebar: React.FC<JobDetailsSidebarProps> = ({
  job,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold text-lg mb-4">Job Overview</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-teal-500" />
          <div>
            <p className="text-sm text-gray-500">Company</p>
            <p className="font-medium">{job.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-teal-500" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{job.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-teal-500" />
          <div>
            <p className="text-sm text-gray-500">Job Type</p>
            <p className="font-medium">{job.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-teal-500" />
          <div>
            <p className="text-sm text-gray-500">Salary</p>
            <p className="font-medium">{job.salary}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-teal-500" />
          <div>
            <p className="text-sm text-gray-500">Posted Date</p>
            <p className="font-medium">
              {new Date(job.postedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};
