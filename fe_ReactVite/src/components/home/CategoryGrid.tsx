import React from 'react';
import { Code2, Briefcase, Building2, Palette, Brain, ShieldCheck, Rocket, HeartPulse } from 'lucide-react';

const categories = [
  { icon: Code2, name: 'Technology', count: 1234 },
  { icon: Building2, name: 'Business', count: 856 },
  { icon: Palette, name: 'Design', count: 432 },
  { icon: Brain, name: 'Marketing', count: 765 },
  { icon: ShieldCheck, name: 'Security', count: 324 },
  { icon: Rocket, name: 'Startups', count: 543 },
  { icon: HeartPulse, name: 'Healthcare', count: 876 },
  { icon: Briefcase, name: 'Finance', count: 654 },
];

export const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, name, count }) => (
            <div
              key={name}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <Icon className="w-8 h-8 text-teal-500 mb-3" />
              <h3 className="font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{count} jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};