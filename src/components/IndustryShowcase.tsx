
import { Building2, ShoppingBag, Truck, Users } from 'lucide-react';

const IndustryShowcase = () => {
  const industries = [
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      description: "Fast last-mile delivery for online retailers",
      stats: "50+ Partners"
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Employee transportation solutions",
      stats: "200+ Companies"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Efficient goods transportation",
      stats: "100+ Routes"
    },
    {
      icon: Users,
      title: "Food Delivery",
      description: "Quick food delivery services",
      stats: "500+ Riders"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
