import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BentoGrid } from '../components/Home/BentoGrid';
import { FAQ } from '../components/Home/FAQ';
import { Footer } from '../components/Layout/Footer';
import cake3 from '../assets/gallery/cake3.jpg';
import cake4 from '../assets/gallery/cake4.jpg';
import cake5 from '../assets/gallery/cake5.jpg';

const Home = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  const showcaseImages = [cake3, cake4, cake5];

  return (
    <div ref={containerRef} className="bg-stone-50 min-h-screen">
      {/* CINEMATIC HERO SECTION */}
      <motion.section
        style={{ y: heroY }}
        className="h-screen relative overflow-hidden flex items-center sticky top-0 z-0"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-crimson-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            {/* LEFT: Product Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[600px] hidden lg:block"
            >
              {/* Main Featured Image */}
              <motion.div
                className="absolute top-0 left-0 w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={showcaseImages[0]}
                  alt="Featured Cake"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating Secondary Images */}
              <motion.div
                className="absolute top-32 right-0 w-[280px] h-[320px] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
              >
                <img
                  src={showcaseImages[1]}
                  alt="Signature Cake"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-32 w-[240px] h-[280px] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
              >
                <img
                  src={showcaseImages[2]}
                  alt="Artisan Cake"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute top-12 right-12 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-amber-200/50"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-stone-900">
                    Handcrafted Daily
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Typography & CTA */}
            <div className="space-y-8 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block text-crimson-600 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                  Artisan Bakery
                </span>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] text-stone-900 mb-6">
                  TASTE THE{' '}
                  <span className="italic text-crimson-600 block mt-2">
                    FORBIDDEN
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-stone-600 leading-relaxed max-w-lg font-light"
              >
                Where culinary artistry meets forbidden indulgence. Each
                creation is a masterpiece designed to captivate your senses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/gallery"
                  className="group relative px-8 py-4 bg-crimson-600 text-white rounded-full font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-crimson-600/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Collection
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-crimson-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-stone-300 text-stone-900 rounded-full font-medium hover:border-crimson-600 hover:text-crimson-600 transition-all"
                >
                  Order Bespoke
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200"
              >
                <div>
                  <div className="text-3xl font-bold text-crimson-600">
                    500+
                  </div>
                  <div className="text-sm text-stone-500 mt-1">Creations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-crimson-600">
                    100%
                  </div>
                  <div className="text-sm text-stone-500 mt-1">Handmade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-crimson-600">5★</div>
                  <div className="text-sm text-stone-500 mt-1">Rated</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* INTRO SECTION - Slides over Hero */}

      <section className="relative z-10 bg-stone-50 sticky top-0 rounded-t-[3rem] border-t border-white/20">
        <div className="py-32 px-6 container mx-auto text-center min-h-screen flex flex-col justify-center">
          <p className="text-2xl md:text-4xl font-light text-stone-600 max-w-4xl mx-auto leading-relaxed">
            "We don't create food. We create{' '}
            <span className="text-crimson-600 font-serif italic">desire</span>.
            Crimson Cakes is an avant-garde bakery pushing the boundaries of
            what is edible."
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              to="/gallery"
              className="group flex items-center gap-4 text-stone-900 uppercase tracking-widest hover:text-crimson-600 transition-colors"
            >
              View The Collection
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENTO GRID SECTION - Slides over Intro */}

      {/* BENTO GRID SECTION - Slides over Intro */}
      <div className="relative z-20 bg-stone-50">
        <BentoGrid />
      </div>

      {/* FAQ SECTION */}
      <div className="relative z-40 bg-stone-50">
        <FAQ />
      </div>

      {/* FOOTER SECTION */}
      <div className="relative z-50 bg-stone-900">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
