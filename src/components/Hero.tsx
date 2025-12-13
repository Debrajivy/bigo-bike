import { ArrowRight, Play } from 'lucide-react';
import heroimg from '../assets/heroimg.png'; // Ensure this path is correct
import herotransinmg from '../assets/herotransimg.png'; // Ensure this path is correct
import banner from '../assets/banner.png'; // Ensure this path is correct

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAppStoreClick = () => {
    // This would typically open app store links
    alert('App store links coming soon!');
  };

  return (
    <section className="relative min-h-screen bg-[#38b6ff] overflow-hidden pt-10 lg:pt-0" style={{ marginTop: -10 }}>
      <div className="relative container mx-auto px-4 lg:px-2">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-8 lg:py-0">
          {/* Hero Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="hero-text">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                YOUR BUSINESS MOBILITY PARTNER
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black mt-4 lg:mt-8 leading-relaxed">
                E-BIKES WITH TRAINED CHAUFFEURS FOR BUSINESS ON RENT
              </h2>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-white/90 mt-8 lg:mt-12 mb-8 leading-relaxed max-w-lg">
              Efficient Fleet Support for Daily On-Demand Delivery Needs and Business at large
            </p>

            {/* Three Buttons Section */}
            <div className="mb-8 lg:mb-12">
              {/* Three Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg">
                <button 
                  className="flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded text-white font-bold text-base sm:text-lg transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#00c554' }}
                >
                  PARCELS
                </button>
                <button 
                  className="flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded text-white font-bold text-base sm:text-lg transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#00c554' }}
                >
                  PEOPLE
                </button>
                <button 
                  className="flex-1 py-3 sm:py-4 px-4 sm:px-6 rounded text-white font-bold text-base sm:text-lg transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#00c554' }}
                >
                  PARTICULARS
                </button>
              </div>
            </div>

            {/* CTA Buttons (Commented out) */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={handleAppStoreClick} className="btn-hero group">
                ANDROID / IOS STORES
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToForm} className="btn-hero group">
                DELIVERY / PICK UP/DROP
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="relative mt-0 lg:mt-48">
              <img
                src={herotransinmg}
                alt="Business mobility and fleet delivery service illustration"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] object-contain lg:object-cover max-w-full lg:max-w-lg mx-auto lg:ml-auto lg:mr-0 rounded-xl transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;