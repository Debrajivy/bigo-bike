
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="section-padding bg-gray-50" id="mission" style={{marginTop:-150}}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            OUR MISSION &
            <br />
            <span className="text-bigo-teal">VISION</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="feature-card text-center">
            <div className="bg-bigo-teal-light/20 rounded-xl p-4 w-fit mx-auto mb-6">
              <Target className="w-8 h-8 text-bigo-teal" />
            </div>
            <h3 style={{ fontSize: 30 }} className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p style={{ textAlign: 'justify' }} className="text-gray-600">
              By providing smart, reliable and cost-effective daily delivery and transport services to businesses, we aim to be a family name and an environmentally-sustainable and trusted brand along the way.
            </p>
          </div>

          <div className="feature-card text-center">
            <div className="bg-bigo-teal-light/20 rounded-xl p-4 w-fit mx-auto mb-6">
              <Eye className="w-8 h-8 text-bigo-teal" />
            </div>
            <h3 style={{ fontSize: 30 }} className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p style={{ textAlign: 'justify' }} className="text-gray-600">
              To provide 100% eco-friendly delivery and transport solutions to Indian businesses with a potential to cut the country’s CO2 emissions by approximately 1 billion metric tonnes.                     </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
