import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const Location = () => {
  const openingHours = [
    { day: 'Monday - Friday', hours: '10:00 AM - 11:00 PM' },
    { day: 'Saturday - Sunday', hours: '09:00 AM - 12:00 AM' },
    { day: 'Public Holidays', hours: '09:00 AM - 12:00 AM' },
  ];

  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/6281234567890', '_blank');
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Visit <span className="text-red-600">Us</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the best Indomie in Jakarta. We're open daily and ready to serve you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-red-600 text-white p-3 rounded-lg">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Jl. Kemang Raya No. 88<br />
                    Kemang, Jakarta Selatan<br />
                    DKI Jakarta 12730<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                <MapPin size={20} />
                Open in Google Maps
              </button>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-yellow-500 text-white p-3 rounded-lg">
                  <Clock size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Opening Hours</h3>
                  <div className="space-y-3">
                    {openingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{schedule.day}</span>
                        <span className="text-red-600 font-bold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4 text-center">
                <span className="text-green-700 font-bold text-lg">🟢 Open Now - We're Ready!</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg border-2 border-green-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Order via WhatsApp</h3>
                  <p className="text-gray-700 mb-4">
                    Quick and easy ordering for takeaway or delivery
                  </p>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={20} className="text-green-600" />
                    <span className="font-semibold">+62 812-3456-7890</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={24} />
                Order Now on WhatsApp
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-yellow-100 rounded-2xl p-4 shadow-2xl h-full min-h-[600px]">
              <div className="bg-white rounded-xl overflow-hidden h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9662087179805!2d106.81606931476894!3d-6.263673395466928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1baf4e5deab%3A0x3027a76e352bea0!2sKemang%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '550px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Indomie House Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 via-red-700 to-yellow-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Experience Indomie Like Never Before?</h3>
          <p className="text-xl mb-8 text-white/95 max-w-3xl mx-auto">
            Visit us today or order online for delivery. Your perfect bowl of Indomie is just minutes away!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleWhatsAppOrder}
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Order for Delivery
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-200">
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
