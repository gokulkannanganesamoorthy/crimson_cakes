import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BRAND_CONTENT } from '../data/content';

const Contact = () => {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white aspect-[16/9] md:aspect-[2/1] shadow-2xl shadow-stone-200 flex flex-col md:flex-row overflow-hidden"
      >
        {/* Visual Side */}
        <div className="w-full md:w-1/2 bg-crimson-900 relative p-12 flex flex-col justify-between text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-[80px]"></div>

          <div className="relative z-10">
            <h2 className="text-xs font-bold tracking-[0.4em] uppercase text-gold-400 mb-2">
              Commissions Open
            </h2>
            <h1 className="text-5xl font-serif">Let's Talk.</h1>
          </div>

          <div className="relative z-10 space-y-2">
            <p className="text-crimson-200 font-light">Chennai, India.</p>
            <p className="text-crimson-200 font-light">Shipping Worldwide.</p>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-crimson-500 to-transparent md:hidden"></div>

          <p className="text-stone-500 font-light mb-12 leading-relaxed">
            Whether it's a wedding centerpiece or a private indulgence, we are
            ready to architect your vision.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:hello@crimsoncakes.com"
              className="group flex items-center justify-between border-b border-stone-200 pb-4 hover:border-crimson-500 transition-colors"
            >
              <span className="text-xl font-serif text-stone-900 group-hover:text-crimson-600 transition-colors">
                Send an Email
              </span>
              <ArrowRight className="text-stone-300 group-hover:text-crimson-600 group-hover:-rotate-45 transition-all duration-300" />
            </a>
            <a
              href={BRAND_CONTENT.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between border-b border-stone-200 pb-4 hover:border-crimson-500 transition-colors"
            >
              <span className="text-xl font-serif text-stone-900 group-hover:text-crimson-600 transition-colors">
                Instagram
              </span>
              <ArrowRight className="text-stone-300 group-hover:text-crimson-600 group-hover:-rotate-45 transition-all duration-300" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
