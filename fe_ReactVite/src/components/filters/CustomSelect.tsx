import React from "react";
import { jobRoles } from "../../../constants/roles";
import { locations } from "../../../constants/locations";
import useDebounce from "../../../hooks/useDebounce";
import useClickOutside from "../../../hooks/useClickOutside";
import { Cross } from "lucide-react";
import { Input } from "../ui/input";
interface SearchSelectRCType {
  className?: string;
  type: "role" | "location";
  value: string;
  onChange: (value: string) => void;
}

export function SearchSelectRL({
  className,
  type = "role",
  value,
  onChange,
}: SearchSelectRCType) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(value);

  const data = type === "role" ? jobRoles : locations;
  const debouncedSearchTerm = useDebounce(searchTerm, 100);

  const ref = useClickOutside(() => {
    setIsDropdownOpen(false);
  });

  const options = React.useMemo(() => {
    const mappedOptions = data;

    let filteredOptions = mappedOptions;

    if (debouncedSearchTerm) {
      const lowercasedTerm = debouncedSearchTerm.toLowerCase();
      filteredOptions = mappedOptions.filter((option) =>
        option.toLowerCase().includes(lowercasedTerm)
      );
    }

    // Sort options so that labels with fewer words come up first
    filteredOptions.sort((a, b) => {
      const aWordCount = a.trim().split(/\s+/).length;
      const bWordCount = b.trim().split(/\s+/).length;

      if (aWordCount !== bWordCount) {
        return aWordCount - bWordCount;
      } else {
        return 0;
      }
    });

    return filteredOptions.slice(0, 40);
  }, [debouncedSearchTerm, data]);

  const handleOptionSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setSelectedItem(selectedValue);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const handleClear = () => {
    onChange("");
    setSearchTerm("");
    setSelectedItem("");
    setIsDropdownOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={ref}>
      <div className="flex items-center relative">
        <Input
          type="text"
          placeholder={`Search ${type}...`}
          value={selectedItem || searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsDropdownOpen(true);
          }}
          className={`w-full border border-gray-300 px-4 py-2 rounded focus:outline-none ${
            isDropdownOpen ? "border-black" : ""
          }`}
          onFocus={() => setIsDropdownOpen(true)}
        />
        {selectedItem && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={handleClear}
          >
            <Cross className="w-3 h-3 text-gray-500" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded mt-1 z-10 max-h-40 overflow-y-auto">
          {options.length > 0 ? (
            options.map((option) => {
              const displayText = option;
              const optionValue = option;

              return (
                <li
                  key={optionValue}
                  onClick={() => handleOptionSelect(option)}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    selectedItem === optionValue ? "bg-gray-200" : ""
                  }`}
                >
                  {displayText}
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
}
