import React from "react";
import { Search } from "lucide-react";
import { SampleJob } from "../../types";
import {
  getAllJobTitles,
  getExpLevels,
  getJobSalary,
  getJobTypes,
} from "../../utils/filters";

interface SearchSidebarProps {
  onFilterChange: (filters: any) => void;
  jobs?: SampleJob[];
}

export const SearchSidebar: React.FC<SearchSidebarProps> = ({
  onFilterChange,
  jobs,
}) => {
  return (
    <div className="bg-[#ebf5f4] p-6 rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Search Input */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Search by Job Title</h3>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              onChange={(e) => onFilterChange({ search: e.target.value })}
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <div className="space-y-2">
            {getAllJobTitles(jobs || []).map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-teal-500 rounded"
                  onClick={(e) => {
                    onFilterChange({
                      search: e.target.checked ? category : "",
                    });
                  }}
                />
                <span className="ml-2 text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Job Type */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Job Type</h3>
          <div className="space-y-2">
            {getJobTypes(jobs || []).map((type) => (
              <label key={type} className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-teal-500 rounded"
                />
                <span className="ml-2 text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Experience Level</h3>
          <div className="space-y-2">
            {getExpLevels(jobs || []).map((level) => {
              return (
                level != "undefined" && (
                  <label key={level} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-500 rounded"
                    />
                    {parseInt(level) === 0 ? (
                      <span className="ml-2 mr-1 text-gray-700">Fresher</span>
                    ) : (
                      <>
                        <span className="ml-2 mr-1 text-gray-700">{level}</span>{" "}
                        Year
                      </>
                    )}
                  </label>
                )
              );
            })}
          </div>
        </div>

        {/* Salary Range */}
        {false && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Salary Range</h3>
            <div className="space-y-2">
              {getJobSalary(jobs || []).map((range) => (
                <label key={range} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-teal-500 rounded"
                  />
                  <span className="ml-2 text-gray-700">{range}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Clear Filters Button */}
        <button className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors">
          Clear Filters
        </button>
      </div>
    </div>
  );
};
