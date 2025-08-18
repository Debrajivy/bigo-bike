
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="section-padding bg-gray-50" id="mission">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            OUR MISSION &
            <br />
            <span className="text-bigo-teal">VISION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card text-center">
            <div className="bg-bigo-teal-light/20 rounded-xl p-4 w-fit mx-auto mb-6">
              <Target className="w-8 h-8 text-bigo-teal" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize urban mobility by providing sustainable, efficient, 
              and accessible electric two-wheeler solutions for businesses and individuals.
            </p>
          </div>

          <div className="feature-card text-center">
            <div className="bg-bigo-green-light/20 rounded-xl p-4 w-fit mx-auto mb-6">
              <Eye className="w-8 h-8 text-bigo-green" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create a cleaner, smarter future where electric mobility 
              is the norm, reducing carbon footprint and enhancing quality of life.
            </p>
          </div>

          <div className="feature-card text-center">
            <div className="bg-bigo-blue-light/20 rounded-xl p-4 w-fit mx-auto mb-6">
              <Heart className="w-8 h-8 text-bigo-blue" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Sustainability, innovation, reliability, and customer-centricity 
              drive everything we do at BiGo.bike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
