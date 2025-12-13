import { CheckCircle } from 'lucide-react';
import herotransinmg from '../assets/afterbanner.png';

const BusinessPartner = () => {
  return (
    <section style={{marginTop:-150}} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Section - EXACTLY AS BEFORE for desktop, responsive for mobile */}
          <div className="animate-slide-in-right">
            <div className="relative flex items-center justify-center lg:justify-start w-full h-full">
              <img
                src={herotransinmg}
                alt="Business mobility and fleet delivery service illustration"
                // Desktop: Exactly as before, Mobile: Responsive
                className="w-full h-auto lg:h-[900px] max-w-full lg:max-w-[800px] object-contain rounded-xl transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-6 tracking-tight">
              ABOUT <span className="text-bigo-green">BiGo</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-700 mb-4 lg:mb-6 leading-relaxed">
              Businesses are never static, always on the move, ready to seize new opportunities and climb the growth ladder. Where the smallest details can drive the greatest growth. And by simplifying the way businesses move, BiGo helps them reach new heights.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-bigo-green flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm lg:text-base">
                  By reducing logistical hurdles with cost-effective e-bikes with drivers on rent.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-bigo-green flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-sm lg:text-base">
                  By providing businesses with the agility and reliability to move forward and upward.
                </p>
              </div>
            </div>

            <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
              Having said that, we are more than a service; we are your partner in growth. Our innovative, sustainable approach and reliability make us the ideal choice for businesses, just like yours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartner;