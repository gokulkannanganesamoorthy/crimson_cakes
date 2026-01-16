import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../data/content';

const About = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Grid */}
        <div className="grid grid-cols-12 gap-6 mb-32 items-end">
          <div className="col-span-12 md:col-span-8 relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-7xl md:text-9xl font-serif leading-[0.9]"
            >
              The <br />{' '}
              <span className="italic text-crimson-600 block ml-20">
                Architects
              </span>
            </motion.h1>
          </div>
          <div className="col-span-12 md:col-span-4 pb-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg font-light leading-relaxed text-stone-600"
            >
              Refining the boundary between confection and sculpture. Every
              layer tells a story of precision and passion.
            </motion.p>
          </div>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="col-span-12 md:col-span-7 relative"
          >
            <img
              src={BRAND_CONTENT.heroImage}
              alt="The Kitchen"
              className="w-full aspect-[4/5] object-cover grayscale brightness-110"
            />
            {/* Overlay Text */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 max-w-xs shadow-xl hidden md:block">
              <p className="font-serif italic text-2xl leading-tight">
                "We don't bake. We build."
              </p>
            </div>
          </motion.div>

          <div className="col-span-12 md:col-span-5 space-y-12">
            <div className="border-t border-stone-300 pt-8">
              <span className="text-xs font-bold tracking-widest text-crimson-600 uppercase mb-4 block">
                Origin
              </span>
              <p className="text-xl font-serif text-stone-800 leading-relaxed">
                {BRAND_CONTENT.bio}
              </p>
            </div>
            <div className="border-t border-stone-300 pt-8">
              <span className="text-xs font-bold tracking-widest text-crimson-600 uppercase mb-4 block">
                Philosophy
              </span>
              <p className="text-stone-600 leading-relaxed">
                We believe luxury lies in reduction. Removing the unnecessary
                until only the essential remains—pure flavor and perfect form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
