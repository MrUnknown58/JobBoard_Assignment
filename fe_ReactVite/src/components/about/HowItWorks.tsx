import React from 'react';
import { Search, FileCheck, Building2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Jobs',
    description: 'Browse through thousands of job listings tailored to your skills and preferences.'
  },
  {
    icon: FileCheck,
    title: 'Apply Online',
    description: 'Submit your application with just a few clicks and track your application status.'
  },
  {
    icon: Building2,
    title: 'Get Hired',
    description: 'Connect with top companies and land your dream job.'
  },
  {
    icon: Rocket,
    title: 'Start Career',
    description: 'Begin your journey with your new company and grow professionally.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-12">How it works</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <div key={title} className="text-center">
            <div className="relative mb-4">
              <div className="w-16 h-16 mx-auto bg-teal-500 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-teal-200" />
              )}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};