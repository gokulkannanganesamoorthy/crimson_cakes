import { Instagram, Mail } from 'lucide-react';
import { BRAND_CONTENT } from '../../data/content';

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-neutral-950 border-t border-white/10 pt-20 pb-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-serif text-white mb-8">
            Ready to order your masterpiece?
          </h2>
          <a
            href={BRAND_CONTENT.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-crimson-600 hover:bg-crimson-700 text-white rounded-full transition-all duration-300 shadow-lg shadow-crimson-900/20 text-lg font-medium tracking-wide mb-12"
          >
            Contact us on Instagram
          </a>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href={BRAND_CONTENT.social.instagram}
              className="text-gray-400 hover:text-crimson-400 transition-colors"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="mailto:hello@crimsoncakes.com"
              className="text-gray-400 hover:text-crimson-400 transition-colors"
            >
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="text-gray-500 text-sm font-light">
            <p>
              &copy; {new Date().getFullYear()} Crimson Cakes. All rights
              reserved.
            </p>
            <p className="mt-2">
              Designed & Developed by{' '}
              <a
                href="https://gokulkannanganesamoorthy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-crimson-400 transition-colors"
              >
                Gokul Kannan Ganesamoorthy
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
