import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../../data/content';

export const BrandStory = () => {
  return (
    <section
      id="about"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-crimson-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute top-4 -left-4 w-full h-full border border-crimson-500/30 rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2670&auto=format&fit=crop" // Elegant kitchen/baking shot
                alt="The Baker"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-crimson-400 font-medium tracking-[0.2em] uppercase text-sm">
              The Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
              Where Passion Meets{' '}
              <span className="text-gold-400 italic">Perfection</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed">
              <p>{BRAND_CONTENT.bio}</p>
              <p>
                At Crimson Cakes, we believe that every celebration deserves a
                centerpiece that tastes as exquisite as it looks. Born from a
                love for fine patisserie and an eye for detail, our cakes are
                more than just desserts—they are memories in the making.
              </p>
              <p>
                Using only the finest ingredients, from Belgian chocolate to
                Madagascar vanilla, each creation is a labor of love, designed
                to captivate your senses and elevate your special moments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
