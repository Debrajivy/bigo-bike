
import { Package, Users, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "FOR BUSINESSES LIKE YOURS",
      subtitle: "Complete Delivery Solutions",
      features: [
        "Custom B2B Deliveries",
        "Flexible Scheduling", 

        "Real-time Fleet Tracking",
        "Dedicated Account Support"
      ]
    },
 
    {
      icon: Wrench,
      title: "TECHNICAL SUPPORT",
      subtitle: "Comprehensive Maintenance",
      features: [
        "Vehicle Maintenance Programs",
        "Technical Training",
        "Emergency Support",
        "Performance Optimization",
        "Preventive Care Plans"
      ]
    }
  ];

  return (
    <section className="section-padding bg-white" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            FOR BUSINESSES
            <br />
            <span className="text-bigo-teal">LIKE YOURS</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive solutions tailored to meet your unique business mobility needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="feature-card group">
              <div className="bg-bigo-teal-light/20 rounded-xl p-4 w-fit mb-6 group-hover:bg-bigo-teal-light/40 transition-colors">
                <service.icon className="w-8 h-8 text-bigo-teal" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-bigo-teal font-semibold mb-6">{service.subtitle}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-bigo-green rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="btn-outline mt-8 w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
