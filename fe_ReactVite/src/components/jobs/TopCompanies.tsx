import React from "react";

const topCompanies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop",
    description: "Leading technology solutions provider",
  },
  {
    id: 2,
    name: "DesignHub",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop",
    description: "Creative design and branding agency",
  },
  {
    id: 3,
    name: "InnovateLabs",
    logo: "https://images.unsplash.com/photo-1548094878-84ced0f6896d?w=100&h=100&fit=crop",
    description: "Innovation and research company",
  },
  {
    id: 4,
    name: "CloudTech",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop",
    description: "Cloud computing solutions",
  },
];

export const TopCompanies: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Top Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {topCompanies.map((company) => (
            <div
              key={company.id}
              className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600">{company.description}</p>
              <button className="mt-4 text-teal-500 hover:text-teal-600 text-sm font-medium">
                View Jobs
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
