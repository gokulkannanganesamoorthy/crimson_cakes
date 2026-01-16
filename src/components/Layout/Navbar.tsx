import { motion, useMotionValue, useSpring } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Home, Image, Info, Mail, ShoppingBag } from 'lucide-react';
import { useRef } from 'react';

// Link Component with Magnetic Pull
const MagneticLink = ({
  to,
  icon,
  label,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const xPos = e.clientX - (left + width / 2);
    const yPos = e.clientY - (top + height / 2);
    x.set(xPos / 2);
    y.set(yPos / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: mouseX, y: mouseY }}>
      <NavLink
        to={to}
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={({ isActive }) => `
            group relative flex items-center justify-center p-4 rounded-full transition-all duration-300
            ${
              isActive
                ? 'bg-crimson-600 text-white shadow-lg shadow-crimson-500/30'
                : 'text-stone-400 hover:text-crimson-600 hover:bg-stone-100'
            }
        `}
      >
        {icon}
        <span className="sr-only">{label}</span>

        {/* Tooltip */}
        <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-stone-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
          {label}
        </span>
      </NavLink>
    </motion.div>
  );
};

export const Navbar = () => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="pointer-events-auto bg-white/80 backdrop-blur-xl border border-stone-200/50 rounded-full px-4 py-2 shadow-2xl shadow-stone-900/5 flex gap-2 items-center"
      >
        <MagneticLink to="/" icon={<Home size={20} />} label="Home" />
        <MagneticLink
          to="/gallery"
          icon={<Image size={20} />}
          label="Gallery"
        />
        <MagneticLink to="/about" icon={<Info size={20} />} label="About" />
        <MagneticLink to="/contact" icon={<Mail size={20} />} label="Contact" />

        <div className="w-px h-6 bg-stone-200 mx-2"></div>

        <MagneticLink
          to="/contact"
          icon={<ShoppingBag size={20} />}
          label="Order"
        />
      </motion.nav>
    </div>
  );
};
