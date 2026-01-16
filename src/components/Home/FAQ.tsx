import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQs = [
  {
    question: 'Do you deliver?',
    answer:
      'Yes, we deliver within a 20-mile radius of the city center. For special events, we can arrange further travel.',
  },
  {
    question: 'Are your cakes gluten-free?',
    answer:
      'We offer a bespoke selection of gluten-free options. However, our kitchen handles flour, so cross-contamination is possible.',
  },
  {
    question: 'How much notice do you need?',
    answer:
      'For signature cakes, 48 hours. For bespoke wedding or celebration cakes, we recommend 2-4 weeks notice.',
  },
  {
    question: 'Can I customize the design?',
    answer:
      "Absolutely. We thrive on creativity. Send us your mood board, and we'll architect a masterpiece.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white text-stone-900 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-10xl !text-black md:text-[12rem] font-serif font-bold text-stone-900/20 leading-none mb-10 -ml-4"
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {FAQs.map((faq, index) => (
            <div key={index} className="border-b border-crimson-800/30 pb-4">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-6 text-left group"
              >
                <span className="text-2xl md:text-4xl font-serif border-stone-200 group-hover:text-crimson-600 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  className="text-crimson-600"
                >
                  <Plus size={32} />
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xl text-stone-500 font-light pb-8 pr-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
