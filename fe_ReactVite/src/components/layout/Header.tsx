import React from "react";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center gap-4 max-w-5xl mx-auto px-4 py-6">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <Briefcase className="text-blue-600" size={32} />
            <h1 className="text-2xl font-bold text-gray-900">Job Board</h1>
          </div>
        </Link>
        <nav className="">
          <ul className="flex items-center ml-10 gap-8 text-gray-600">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
