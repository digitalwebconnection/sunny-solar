import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How long does a residential solar installation take?',
    answer:
      'Most standard residential installations (6.6kW to 13.2kW) are completed in a single day. Our team arrives around 7:00 AM, secures the roof, mounts the panels, completes the electrical wiring and inverter setup, and performs thorough safety testing by mid-afternoon.',
  },
  {
    question: 'What warranties come with a Sunny Solar system?',
    answer:
      'You receive a 25-year panel product and performance warranty, a 10-to-15 year inverter warranty, and our comprehensive 10-year workmanship guarantee. If any part of your system underperforms, we manage the replacement directly.',
  },
  {
    question: 'Will a home battery keep my power on during a blackout?',
    answer:
      'Yes. Systems equipped with backup capabilities (like Tesla Powerwall 3 or Sungrow EPS) automatically disconnect from the grid during an outage within milliseconds, keeping your lights, refrigeration, Wi-Fi, and essential circuits running seamlessly.',
  },
  {
    question: 'How do Australian Federal STC solar rebates work?',
    answer:
      'Small-scale Technology Certificates (STCs) provide an immediate point-of-sale discount based on your system’s expected clean energy output. On a typical 10kW system, STCs reduce upfront costs by $2,800 to $3,600. We claim these directly on your behalf so you only pay the net price.',
  },

];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-14 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1d6327] bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181b] font-serif tracking-tight">
            Got Questions?{' '} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f37021] to-[#f59e0b]">
              We’ve Got Answers.
            </span>
          </h2>
          <p className="mt-3 text-slate-900 text-base">
            Everything you need to know about solar installation, batteries, warranties, and rebates.
          </p>
        </div>

        {/* Clean Simple Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-200 ${
                  isOpen
                    ? 'border-[#f37021]/50 bg-orange-50/20 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#ea580c] text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

     

      </div>
    </section>
  );
};

export default FAQSection;
