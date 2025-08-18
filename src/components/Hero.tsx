
import { ArrowRight, Play } from 'lucide-react';

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
    <section className="relative min-h-screen bg-hero-gradient bg-pattern overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 -left-10 w-32 h-32 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Hero Content */}
          <div className="animate-fade-in">
            <h1 className="hero-text mb-6">
              YOUR DAILY BUSINESS RUNNER.
              <br />
              <span className="text-bigo-green">ON SUBSCRIPTION.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-lg">
              Efficient Fleet Support for Daily On-Demand Delivery Needs and Business at large
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={handleAppStoreClick} className="btn-hero group">
                ANDROID / IOS STORES
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToForm} className="btn-hero group">
                DELIVERY / PICK UP/DROP
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Service Categories */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">PARCELS</span>
              </div>
              <div className="bg-bigo-blue text-white rounded-lg px-6 py-3">
                <span className="font-semibold">PEOPLE</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-white font-semibold">PARTICULARS</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Delivery icon/illustration */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="w-64 h-64 mx-auto bg-white/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-bigo-green rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold">Fast Delivery</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-float">
                <Play className="w-6 h-6 text-bigo-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
