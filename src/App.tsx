import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { SmoothScroll } from './components/Layout/SmoothScroll';
import { ScrollToTopButton } from './components/Layout/ScrollToTopButton';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect } from 'react';

import { useLenis } from 'lenis/react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <ScrollToTop />
          <ScrollToTopButton />
          <div className="bg-neutral-950 min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
