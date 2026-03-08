const Menu = () => {
  const menuItems = [
    {
      emoji: '🍜',
      name: 'Indomie Goreng Special',
      description: 'Classic fried Indomie with fried egg, vegetables, and crispy shallots',
      price: 'Rp 35.000',
    },
    {
      emoji: '🌶️',
      name: 'Indomie Pedas Gila',
      description: 'Extra spicy Indomie with chili oil, bird\'s eye chili, and lime',
      price: 'Rp 38.000',
    },
    {
      emoji: '🧀',
      name: 'Indomie Cheese Lava',
      description: 'Creamy cheese sauce over Indomie with crispy chicken nuggets',
      price: 'Rp 45.000',
    },
    {
      emoji: '🥚',
      name: 'Indomie Telur Geprek',
      description: 'Smashed fried egg on top of spicy Indomie with sambal',
      price: 'Rp 40.000',
    },
    {
      emoji: '🍤',
      name: 'Indomie Seafood Deluxe',
      description: 'Premium seafood medley with squid, shrimp, and fish balls',
      price: 'Rp 55.000',
    },
    {
      emoji: '🥓',
      name: 'Indomie Rendang Beef',
      description: 'Tender rendang beef strips with traditional spices',
      price: 'Rp 50.000',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Menu</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-yellow-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our signature Indomie creations, each crafted with passion and authentic Indonesian flavors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-red-100"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-red-200">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-200">
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see our full menu?</p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
