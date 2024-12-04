import React from "react";
import { JobFilters } from "../../types";
import { SearchInput } from "./SearchInput";
import { TypeFilter } from "./TypeFilter";
import clsx from "clsx";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface SearchBarProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
  variant?: "default" | "hero";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  filters,
  onFilterChange,
  variant = "default",
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg shadow-md p-4 mb-6",
        variant === "hero" ? "bg-white/95 backdrop-blur-sm" : "bg-white"
      )}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <SearchInput
          value={filters.search}
          onChange={(search) => onFilterChange({ ...filters, search })}
        />
        <TypeFilter
          value={filters.type}
          onChange={(type) => onFilterChange({ ...filters, type })}
        />
        <Link to={"/jobs"}>
          <Button className="bg-[#309689]">Search</Button>
        </Link>
      </div>
    </div>
  );
};
