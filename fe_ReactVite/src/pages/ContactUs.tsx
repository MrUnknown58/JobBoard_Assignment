import React from "react";
import { ContactForm } from "../components/contact/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const ContactUs: React.FC = () => {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Have questions? We're here to help. Send us a message and we'll
          respond as soon as possible.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">
              123 Job Street
              <br />
              San Francisco, CA 94105
            </p>
          </div>
          <div className="text-center">
            <Phone className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 text-teal-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@jobboard.com</p>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
};
