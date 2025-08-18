
import { CheckCircle, Smartphone, Shield, Clock, Truck, Package, Zap } from 'lucide-react';

const BusinessPartner = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="animate-fade-in">
            <div className="relative">
              {/* Smaller delivery-themed illustration */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Main delivery truck icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 bg-bigo-teal rounded-full flex items-center justify-center shadow-lg">
                      <Truck className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Surrounding elements */}
                  <div className="absolute top-8 left-8">
                    <div className="w-16 h-16 bg-bigo-green rounded-full flex items-center justify-center">
                      <Package className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 bg-bigo-blue rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-20 bg-gradient-to-r from-bigo-green to-bigo-teal rounded-full flex items-center justify-center">
                      <Smartphone className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 80,80 Q 160,40 240,80"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <path
                      d="M 80,240 Q 160,200 240,240"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-bigo-green text-white rounded-2xl p-6 shadow-xl">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-in-right">
            <h2 className="section-title">
              YOUR BUSINESS'
              <br />
              <span className="text-bigo-teal">MOBILITY PARTNER.</span>
              <br />
              LITERALLY.
            </h2>
            
            <p className="section-subtitle mb-8">
              Helping businesses and enterprises ease the burden 
              of managing and connecting physical dimensions 
              with less effort, focus & cost out there so 
              businesses can focus on what matters to them
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-bigo-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">On-demand Delivery</h3>
                  <p className="text-gray-600 text-sm">Real-time tracking and instant notifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Smartphone className="w-6 h-6 text-bigo-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mobile Management</h3>
                  <p className="text-gray-600 text-sm">Complete fleet control from your device</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-bigo-green flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Secure & Reliable</h3>
                  <p className="text-gray-600 text-sm">End-to-end security for all deliveries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-bigo-teal flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fast Response</h3>
                  <p className="text-gray-600 text-sm">Quick pickup and delivery times</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPartner;
