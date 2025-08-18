
import { Linkedin, Twitter } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Former executive at major mobility company with 15+ years experience",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Priya Sharma",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b098?w=300&h=300&fit=crop&crop=face",
      bio: "Technology leader specializing in IoT and fleet management systems",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Amit Patel",
      role: "COO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face", 
      bio: "Operations expert with deep knowledge in sustainable transportation",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="founders">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            MEET OUR
            <br />
            <span className="text-bigo-teal">FOUNDERS</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The visionary team driving the future of sustainable mobility
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="feature-card text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-bigo-teal font-semibold mb-4">{founder.role}</p>
              <p className="text-gray-600 mb-6">{founder.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href={founder.social.linkedin} className="text-bigo-teal hover:text-bigo-green transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={founder.social.twitter} className="text-bigo-teal hover:text-bigo-green transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
