import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      {/* Header */}
      

      <div style={{marginTop:50}} className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              BiGo Electric Private Limited Privacy Policy
            </h2>
            <p className="text-gray-600 mb-4">
              BiGo Electric Private Limited ("BiGo", "we", "us", "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, store, and safeguard your personal information.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
              1. INFORMATION WE COLLECT
            </h3>
            
            <div className="ml-11">
              <h4 className="text-lg font-medium text-gray-700 mb-2">A. Client Information:</h4>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                <li>Name, phone, email</li>
                <li>Business details, GST</li>
                <li>KYC documents: Aadhaar, PAN, DL</li>
                <li>Payment info</li>
                <li>Emergency contact details</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-700 mb-2">B. Rider / Pilot Data:</h4>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                <li>Live selfie</li>
                <li>GPS location during service</li>
                <li>Trip history, km usage, routes</li>
                <li>Communication logs</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-700 mb-2">C. Device & Technical Data:</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>IP address</li>
                <li>Device info, OS</li>
                <li>App usage logs</li>
                <li>Cookies & analytics</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
              2. HOW WE USE YOUR INFORMATION
            </h3>
            <div className="ml-11">
              <p className="text-gray-600 mb-3">
                We use data for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                <li>KYC verification</li>
                <li>Providing EV rental & Pilot services</li>
                <li>GPS tracking for safety & misuse prevention</li>
                <li>Billing and invoicing</li>
                <li>Fraud prevention</li>
                <li>App/service improvement</li>
                <li>Customer support</li>
              </ul>
              <p className="text-gray-600 font-medium">
                We do NOT sell data.
              </p>
            </div>
          </section>

          {/* GPS Tracking */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
              3. GPS TRACKING
            </h3>
            <div className="ml-11">
              <p className="text-gray-600">
                All BiGo vehicles and Pilots are GPS tracked for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mt-2 space-y-1">
                <li>Safety</li>
                <li>Theft prevention</li>
                <li>Billing accuracy</li>
                <li>Usage compliance</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
              4. DATA SHARING
            </h3>
            <div className="ml-11">
              <p className="text-gray-600 mb-3">
                We share data only with:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                <li>Insurance companies</li>
                <li>Law enforcement (if required)</li>
                <li>Banking/payment partners</li>
                <li>Franchise partners for service delivery</li>
              </ul>
              <p className="text-gray-600 font-medium">
                We never share/sell data to advertisers.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
              5. DATA SECURITY
            </h3>
            <div className="ml-11">
              <ul className="list-disc pl-5 text-gray-600 mb-2 space-y-1">
                <li>Secure servers</li>
                <li>Encryption</li>
                <li>Restricted access</li>
              </ul>
              <p className="text-gray-600">
                Users acknowledge inherent online risks.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
              6. DATA RETENTION
            </h3>
            <div className="ml-11">
              <p className="text-gray-600 mb-3">
                Data is retained for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-2 space-y-1">
                <li>Service fulfilment</li>
                <li>Legal/tax compliance</li>
                <li>Dispute resolution</li>
              </ul>
              <p className="text-gray-600">
                Deleted/anonymized afterward.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
              7. USER RIGHTS
            </h3>
            <div className="ml-11">
              <p className="text-gray-600 mb-3">
                Users may request:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                <li>Data access</li>
                <li>Corrections</li>
                <li>Deletion (unless restricted)</li>
                <li>Opt-out of promotional communication</li>
              </ul>
              <p className="text-gray-600">
                Contact: <a href="mailto:ankit@bigo.bike" className="text-bigo-green hover:underline">ankit@bigo.bike</a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
              8. COOKIES
            </h3>
            <div className="ml-11">
              <p className="text-gray-600 mb-2">
                Used for:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                <li>Login session</li>
                <li>Analytics</li>
                <li>Personalization</li>
              </ul>
              <p className="text-gray-600">
                Disabling cookies may affect functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Links */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">9</span>
              9. THIRD-PARTY LINKS
            </h3>
            <div className="ml-11">
              <p className="text-gray-600">
                BiGo is not responsible for external-site privacy practices.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">10</span>
              10. POLICY UPDATES
            </h3>
            <div className="ml-11">
              <p className="text-gray-600">
                Policy may be updated anytime. Continued use = acceptance.
              </p>
            </div>
          </section>

          {/* Privacy Contact */}
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">11</span>
              11. PRIVACY CONTACT
            </h3>
            <div className="ml-11">
              <div className="space-y-2">
                <p className="text-gray-600">
                  Email: <a href="mailto:ankit@bigo.bike" className="text-bigo-green hover:underline">ankit@bigo.bike</a>
                </p>
                <p className="text-gray-600">
                  Phone: <a href="tel:+919831012456" className="text-bigo-green hover:underline">+91 9831012456</a>
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-gray-500 text-sm">
              This Privacy Policy is effective as of 2025. By using BiGo.bike services, you agree to the terms outlined above.
            </p>
          </div>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;