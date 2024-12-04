import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "Found my dream job within weeks! The platform's search capabilities are exceptional.",
    author: "Sarah Johnson",
    role: "Senior Developer",
    company: "TechCorp",
  },
  {
    id: 2,
    content: "The best job board I've used. Clean interface and quality job listings.",
    author: "Michael Chen",
    role: "UX Designer",
    company: "DesignHub",
  },
  {
    id: 3,
    content: "Incredible platform that helped me land my perfect role. Highly recommended!",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Testimonials from Our Customers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};