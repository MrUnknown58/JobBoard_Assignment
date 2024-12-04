import React from "react";
import { Briefcase } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-teal-500" size={32} />
              <span className="text-xl font-bold">Job Board</span>
            </div>
            <p className="text-gray-400">
              Find your dream job and take the next step in your career.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Job Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-500">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500">
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest job updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © {currentYear} Job Board. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-teal-500">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-teal-500">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
