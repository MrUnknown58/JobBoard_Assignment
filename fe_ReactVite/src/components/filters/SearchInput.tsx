import React from "react";
import { SearchSelectRL } from "./CustomSelect";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative flex-1">
      <SearchSelectRL
        onChange={onChange}
        type="role"
        value={value}
        key={value}
      />
    </div>
  );
};
