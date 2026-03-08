import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={24} />, label: 'Instagram', url: '#' },
    { icon: <Facebook size={24} />, label: 'Facebook', url: '#' },
    { icon: <Youtube size={24} />, label: 'YouTube', url: '#' },
    { icon: <Mail size={24} />, label: 'Email', url: 'mailto:hello@indomiehouse.id' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold text-2xl inline-block mb-6 shadow-lg">
              Indomie House
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Jakarta's premier destination for elevated Indomie experiences.
              Transforming Indonesia's beloved instant noodle into culinary masterpieces since 2018.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-red-600 p-3 rounded-lg transition-all duration-200 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#location" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Kemang Raya No. 88<br />
                  Jakarta Selatan 12730
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-red-500 flex-shrink-0" />
                <span className="text-gray-300">hello@indomiehouse.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Indomie House Jakarta. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
