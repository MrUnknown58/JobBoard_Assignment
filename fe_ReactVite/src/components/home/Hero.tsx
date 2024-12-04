import React from 'react';
import { SearchBar } from '../filters/SearchBar';
import { JobFilters } from '../../types';

interface HeroProps {
  filters: JobFilters;
  onFilterChange: (filters: JobFilters) => void;
}

export const Hero: React.FC<HeroProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 py-20">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
          Find Your Dream Job Today!
        </h1>
        <SearchBar filters={filters} onFilterChange={onFilterChange} variant="hero" />
      </div>
    </div>
  );
};