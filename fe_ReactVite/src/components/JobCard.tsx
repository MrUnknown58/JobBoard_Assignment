import React from 'react';
import { CalendarDays, MapPin, Timer } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-700">
              {job.type}
            </span>
          </div>
          <div className="mt-2">
            <p className="text-gray-600 font-medium">{job.company}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                {job.location}
              </div>
              <div className="flex items-center gap-1">
                <Timer size={16} />
                {job.salary}
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays size={16} />
                {new Date(job.postedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
        </div>
      </div>
    </div>
  );
};