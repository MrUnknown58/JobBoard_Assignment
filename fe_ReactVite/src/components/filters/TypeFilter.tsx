import React from "react";
import { locations } from "../../../constants/locations";

interface TypeFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({ value, onChange }) => {
  return (
    <select
      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
};
