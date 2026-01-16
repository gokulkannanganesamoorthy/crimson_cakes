import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../../data/content';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-crimson-500 uppercase tracking-widest text-sm font-semibold">
            Our Creations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">
            Edible Masterpieces
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BRAND_CONTENT.images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${
                // Create a staggered masonry effect by spanning rows for some items
                index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index % 5 === 0 ? 'lg:row-span-2' : ''}`}
            >
              <img
                src={src}
                alt={`Crimson Cakes Creation ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/40 transition-all duration-500 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-serif tracking-wider">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
