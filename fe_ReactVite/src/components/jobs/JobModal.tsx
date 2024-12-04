import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { SampleJob } from "../../types";
import { JobDetails } from "./JobDetails";

interface JobModalProps {
  job: SampleJob | null;
  isOpen: boolean;
  onClose: () => void;
}

export const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  if (!job) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl shadow-lg">
          <div className="relative p-6">
            <button
              onClick={onClose}
              className="absolute right-2 top-4  text-gray-400 hover:text-gray-500"
            >
              <X size={24} />
            </button>
            <div className="flex items-start gap-6">
              <img
                src={job.company_logo_url}
                alt={`${job.company_name} logo`}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <JobDetails job={job} showFullDescription />
                <div className="mt-6">
                  <button
                    onClick={() => window.open(job.job_url, "_blank")}
                    className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
