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
    // MODIFICATION: Replaced `bg-hero-gradient` with `bg-[#38b6ff]`
    <section className="relative min-h-screen bg-[#38b6ff] overflow-hidden" style={{marginTop:-10}}>
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div> */}

      <div className="relative container mx-auto lg:px-2 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="hero-text " >
              YOUR BUSINESS MOBILITY PARTNER
              <br />
              <h5 style={{ color: 'black', fontSize: 30, marginTop: 30 }}>E- BIKES WITH TRAINED CHAUFFEURS FOR BUSINESS ON RENT</h5>
            </h1>

            <p className="text-xl md:text-xl text-white/90 mb-8 leading-relaxed max-w-lg" style={{ marginTop: 70 }}>
              Efficient Fleet Support for Daily On-Demand Delivery Needs and Business at large
            </p>

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

            {/* Service Categories */}

          </div>

          {/* Hero Image - UPDATED SECTION */}
          <div className="animate-slide-in-right">
            <div className="relative" style={{ marginTop: 180 }}>
              {/* Replaced the entire div with the image tag */}
              <img
                src={herotransinmg}
                alt="Business mobility and fleet delivery service illustration"
                // Key change: Replaced 'mx-auto' with 'ml-auto mr-0' to push the image to the right within its grid column.
                className="w-full h-[700px] object-cover max-w-lg ml-auto mr-0 rounded-xl transition-transform duration-500" style={{marginLeft:370}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;