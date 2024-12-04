import React from "react";
import { HowItWorks } from "../components/about/HowItWorks";
import { FAQ } from "../components/about/FAQ";

export const AboutUs: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We help talented people find great jobs and enable companies to build
          amazing teams.
        </p>
      </section>
      <HowItWorks />
      <FAQ />
    </main>
  );
};
