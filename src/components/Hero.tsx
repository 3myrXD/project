import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/4518844/pexels-photo-4518844.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/85 via-red-800/80 to-yellow-600/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-6 shadow-lg">
            <Sparkles size={18} />
            <span>Jakarta's Premier Indomie Experience</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to<br />
            <span className="text-yellow-400">Indomie House</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the authentic taste of Indonesia's beloved instant noodle,
            elevated to restaurant perfection in the heart of Jakarta
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('location')}
              className="group bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transform hover:scale-105 transition-all duration-200 shadow-2xl flex items-center gap-2"
            >
              Order Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200"
            >
              View Menu
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-white/90 font-medium">Menu Variations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10K+</div>
            <div className="text-white/90 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-white/90 font-medium">Open Daily</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
