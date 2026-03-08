import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Food Blogger',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Indomie House took my favorite childhood snack and turned it into a gourmet experience! The Volcano Indomie is absolutely mind-blowing. A must-visit in Jakarta!',
    },
    {
      name: 'Sarah Wijaya',
      role: 'Local Resident',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'I come here at least twice a week! The cheese lava Indomie is my go-to comfort food. The atmosphere is great and the staff are always friendly. Love this place!',
    },
    {
      name: 'Michael Chen',
      role: 'Tourist from Singapore',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Best Indomie I\'ve ever had! Creative menu, generous portions, and affordable prices. This place perfectly represents Jakarta\'s vibrant food scene. Will definitely come back!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-red-600">Customers Say</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy customers who have made Indomie House their favorite dining spot
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 relative"
            >
              <div className="absolute -top-4 -left-4 bg-red-600 text-white p-3 rounded-full">
                <Quote size={24} />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-red-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Love Our Food?</h3>
          <p className="text-xl mb-6 text-white/95">
            Share your experience and get a special discount on your next visit!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              4.9/5.0 Rating
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              2,500+ Reviews
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
              #1 on TripAdvisor
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
