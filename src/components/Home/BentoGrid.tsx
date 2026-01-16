import { motion } from 'framer-motion';
import cake1 from '../../assets/gallery/cake1.jpg';
import cake2 from '../../assets/gallery/cake2.jpg';

export const BentoGrid = () => {
  return (
    <section className="py-32 bg-stone-50 px-6 min-h-screen">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">
            THE <span className="text-crimson-600 italic">PROCESS</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-stone-200"
          >
            <img
              src={cake1}
              alt="Fine Ingredients"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-serif text-white mb-2">
                Fine Ingredients
              </h3>
              <p className="text-stone-200">
                Belgian Chocolate Only. We source our cocoa directly from
                sustainable farms in Ghana and process it in Belgium.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group border border-stone-200 bg-crimson-50"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-9xl font-serif opacity-10 text-crimson-900 rotate-90 whitespace-nowrap">
                PASSION
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-3xl font-serif text-crimson-900 mb-2">
                Aesthetic First.
              </h3>
              <p className="text-crimson-800">
                Visually stunning cakes that break the internet.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 relative rounded-3xl overflow-hidden group border border-stone-200"
          >
            <img
              src={cake2}
              alt="Fresh Berries"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-stone-900/20 p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-serif text-white drop-shadow-md">
                Fresh Berries.
              </h3>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-stone-200 bg-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-crimson-50/50 via-white to-white"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-center items-center text-center z-10">
              <span className="text-crimson-600 uppercase tracking-widest text-sm font-bold mb-4">
                Our Promise
              </span>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-900 max-w-2xl leading-tight">
                "We don't just bake cakes. We sculpt memories in sugar and
                flour."
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
