import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="text-red-600" size={32} />,
      title: 'Made with Passion',
      description: 'Every bowl crafted with love and authentic Indonesian flavors',
    },
    {
      icon: <Award className="text-yellow-500" size={32} />,
      title: 'Premium Quality',
      description: 'Only the finest ingredients for an unforgettable experience',
    },
    {
      icon: <Users className="text-red-600" size={32} />,
      title: 'Community Favorite',
      description: 'Loved by locals and tourists alike since 2018',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Story</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl opacity-20 blur-2xl"></div>
            <img
              src="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Indomie House Interior"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Jakarta's Indomie Destination
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2018, Indomie House began with a simple mission: to elevate
              Indonesia's most beloved instant noodle into a premium dining experience.
              Located in the vibrant heart of Jakarta, we've become the go-to destination
              for Indomie lovers seeking creative, delicious, and Instagram-worthy dishes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our chefs transform humble Indomie into culinary masterpieces, combining
              traditional Indonesian flavors with modern presentation. Each dish tells
              a story of innovation, passion, and respect for this iconic Indonesian staple.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
                Est. 2018
              </div>
              <div className="bg-red-600 text-white  px-6 py-3 rounded-lg font-semibold">
                Award Winning
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
