import { motion } from 'framer-motion';
import { useState } from 'react';
import { BRAND_CONTENT } from '../data/content';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 pt-32 pb-40 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24 relative z-10"
      >
        <div className="inline-block px-4 py-1 mb-4 border border-crimson-900/10 rounded-full bg-white/50 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-crimson-600">
            The Collection
          </span>
        </div>
        <h1 className="text-6xl md:text-9xl font-serif font-medium tracking-tighter text-stone-900 mix-blend-overlay opacity-90">
          EDIBLE{' '}
          <span className="italic text-crimson-600 font-serif">ART.</span>
        </h1>
      </motion.div>

      {/* Uniform 3x4 Grid */}
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_CONTENT.images.map((src, index) => (
            <motion.div
              key={index}
              layoutId={`gallery-item-${index}`}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="relative group rounded-3xl overflow-hidden cursor-none md:cursor-pointer aspect-[4/5]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Main Container with Focus Effect */}
              <div
                className={`w-full h-full relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? 'opacity-40 scale-95 grayscale-[50%]'
                    : 'opacity-100 scale-100 grayscale-0'
                }`}
              >
                <img
                  src={src}
                  alt={`Cake art ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* Cinematic Overlay - Normally invisible, elegant dark gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 will-change-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="block text-crimson-400 text-xs font-bold tracking-widest uppercase mb-2">
                        Exhibit
                      </span>
                      <h3 className="text-white text-3xl font-serif italic leading-none">
                        No. {String(index + 1).padStart(2, '0')}
                      </h3>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
                      <svg
                        className="w-5 h-5 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
