import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Location', id: 'location' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-bold text-xl shadow-md">
              Indomie House
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('location')}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Order Now
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-gray-700 hover:text-red-600 font-medium py-2 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('location')}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
