import { Star, Flame, Clock } from 'lucide-react';

const FeaturedDish = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full font-bold mb-4">
            <Star size={18} fill="currentColor" />
            <span>Signature Dish</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Volcano Indomie
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-red-600 rounded-2xl opacity-30 blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Volcano Indomie"
              className="relative rounded-2xl shadow-2xl w-full h-[450px] object-cover border-4 border-yellow-400"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-4 rounded-xl font-bold text-2xl shadow-xl">
              Rp 65.000
            </div>
          </div>

          <div className="text-white space-y-6">
            <h3 className="text-3xl font-bold">
              Our Most Popular Creation
            </h3>
            <p className="text-xl text-white/95 leading-relaxed">
              A towering masterpiece that combines three types of Indomie noodles,
              topped with a mountain of melted cheese, crispy fried chicken,
              spicy sambal, and a perfectly fried egg. Finished with fresh vegetables
              and our secret sauce blend.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="text-yellow-400" size={24} />
                  <span className="font-bold text-lg">Spice Level</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-2 bg-red-600 rounded-full"></div>
                  ))}
                  <div className="w-8 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="text-yellow-400" size={24} />
                  <span className="font-bold text-lg">Prep Time</span>
                </div>
                <p className="text-2xl font-bold">15 mins</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-3">What's Inside:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Triple Indomie Noodle Base
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Premium Melted Cheese
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Crispy Fried Chicken
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Signature Spicy Sambal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400">✓</span>
                  Fresh Vegetables & Toppings
                </li>
              </ul>
            </div>

            <button className="w-full bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transform hover:scale-105 transition-all duration-200 shadow-xl">
              Order The Volcano Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
