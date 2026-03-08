import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import FeaturedDish from './components/FeaturedDish';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Menu />
      <FeaturedDish />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
