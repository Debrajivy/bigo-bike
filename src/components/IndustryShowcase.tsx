import { ShoppingBag, Utensils, Truck, Home, Building2, User } from 'lucide-react';

const IndustryShowcase = () => {
  const industries = [
    {
      icon: Utensils,
      title: "Cloud Kitchens & Restaurants",
      description: "Eco-friendly food delivery solutions",
      stats: "100+ Partners"
    },
    {
      icon: ShoppingBag,
      title: "Hyperlocals & E-Commerce",
      description: "Sustainable last-mile delivery",
      stats: "50+ Retailers"
    },
    {
      icon: Truck,
      title: "Bigo Services",
      description: "Affordable e-bike rental subscriptions",
      stats: "500+ Fleet"
    },
    {
      icon: Home,
      title: "Home Businesses",
      description: "For bakeries, florists, and local shops",
      stats: "200+ Entrepreneurs"
    },
    {
      icon: Building2,
      title: "Real Estate",
      description: "Property consultants and agents",
      stats: "100+ Agents"
    },
    {
      icon: User,
      title: "Other Services",
      description: "Custom business mobility solutions",
      stats: "Flexible Plans"
    }
  ];

  return (
    <section className="section-padding bg-white" id="industries">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            INDUSTRIES WE
            <br />
            <span className="text-bigo-teal">SERVE</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Powering mobility across diverse sectors with our EV solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="feature-card text-center group">
              <div className="bg-bigo-teal-light/20 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:bg-bigo-teal-light/40 transition-colors">
                <industry.icon className="w-8 h-8 text-bigo-teal" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <div className="text-bigo-green font-semibold">{industry.stats}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;