import React from 'react';

const faqs = [
  {
    question: 'How much does it cost to post a job?',
    answer: 'We offer flexible pricing plans starting from $99 per job posting. Contact us for custom enterprise solutions.'
  },
  {
    question: 'How long will my job posting stay active?',
    answer: 'Job postings remain active for 30 days. You can always extend or renew your posting if needed.'
  },
  {
    question: 'Can I edit my job posting after it goes live?',
    answer: 'Yes, you can edit your job posting at any time during its active period.'
  },
  {
    question: 'How do I know if someone has applied to my job?',
    answer: 'You\'ll receive email notifications for new applications and can track them in your dashboard.'
  }
];

export const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{question}</h3>
              <p className="text-gray-600">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};