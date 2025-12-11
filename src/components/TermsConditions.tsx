import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Header />
            {/* Header */}
           

            <div style={{marginTop:50}} className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                    {/* Introduction */}
                    <section className="mb-8">
                        <div className="bg-gray-50 border-l-4 border-bigo-green p-4 mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                BiGo – Terms & Conditions
                            </h2>
                            <p className="text-gray-600">
                                Welcome to BiGo Electric Private Limited ("BiGo", "we", "us", "our"). By subscribing to our services,
                                visiting our website, or using any BiGo platform, you ("Client", "You", "Your") agree to the following
                                Terms & Conditions. Please read them carefully before booking.
                            </p>
                            <p className="text-gray-600 mt-2">
                                This document covers both types of BiGo B2B & B2C services:
                            </p>
                            <ol className="list-decimal pl-5 text-gray-600 mt-2 space-y-1">
                                <li>Dedicated Rider Model (EV Bike + Pilot Provided by BiGo)</li>
                                <li>EV Rental Service (Bike Only, No Pilot)</li>
                            </ol>
                        </div>
                    </section>

                    {/* Definitions */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                            1. Definitions
                        </h3>
                        <div className="ml-11 space-y-3">
                            <div>
                                <h4 className="font-medium text-gray-700">EV Bike / Vehicle:</h4>
                                <p className="text-gray-600 ml-4">Electric two-wheeler owned by BiGo.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700">Pilot:</h4>
                                <p className="text-gray-600 ml-4">A trained BiGo rider provided for the Dedicated Rider Model.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700">Client:</h4>
                                <p className="text-gray-600 ml-4">Any business entity subscribing to BiGo's services.</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-700">Package:</h4>
                                <p className="text-gray-600 ml-4">Daily, Weekly, or Monthly subscription selected by the Client.</p>
                            </div>
                        </div>
                    </section>

                    {/* Service Overview */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                            2. Service Overview
                        </h3>

                        <div className="ml-11">
                            <h4 className="text-lg font-medium text-gray-700 mb-3">A. Dedicated Rider Model (Bike + Pilot)</h4>
                            <div className="mb-4 pl-4">
                                <p className="text-gray-600 mb-2 font-medium">BiGo provides:</p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>An EV bike</li>
                                    <li>A trained Pilot (driver)</li>
                                </ul>
                                <p className="text-gray-600 mb-2">The bike and Pilot are provided for the duration chosen by the Client.</p>

                                <p className="text-gray-600 mb-2 font-medium">Daily Usage Limit:</p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>Maximum 10 hours per day, OR</li>
                                    <li>Maximum 80 km per day</li>
                                </ul>
                                <p className="text-gray-600 mb-3 italic">Extra usage will be charged separately.</p>

                                <p className="text-gray-600 mb-2 font-medium">Time Calculation:</p>
                                <p className="text-gray-600 mb-3 ml-4">
                                    10 hours count from the Pilot's first reporting location to their last reporting location.
                                </p>

                                <p className="text-gray-600 mb-2">Included within the 10-hour working limit are the following activities:</p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>Bike charging time</li>
                                    <li>Lunch break</li>
                                </ul>
                                <p className="text-gray-600 mb-4 ml-4 border-l-2 border-bigo-green pl-3">
                                    Both activities must be completed within a single combined 1-hour break.
                                    No additional break time will be provided beyond this 1-hour allowance.
                                </p>

                                <p className="text-gray-600 mb-2 font-medium">Weekly Off:</p>
                                <p className="text-gray-600 mb-3 ml-4">
                                    The Pilot must receive one weekly off. Using the Pilot on all 7 days attracts extra charges.
                                </p>

                                <p className="text-gray-600 mb-2 font-medium">Bookings:</p>
                                <p className="text-gray-600 ml-4 font-medium">All bookings are non-cancellable and non-refundable.</p>
                            </div>

                            <h4 className="text-lg font-medium text-gray-700 mb-3">B. EV Rental Service (Bike Only – No Pilot)</h4>
                            <div className="mb-4 pl-4">
                                <p className="text-gray-600 mb-3">
                                    The Client receives only the EV bike for self-use or for use by their employees.
                                </p>

                                <p className="text-gray-600 mb-2 font-medium">Rider Eligibility Requirement:</p>
                                <p className="text-gray-600 mb-2 ml-4">
                                    The person using the rented EV must:
                                </p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>Hold a valid driving license</li>
                                    <li>Ride responsibly and follow all traffic laws</li>
                                    <li>Not hand over the vehicle to unauthorized persons</li>
                                    <li>Not ride under the influence of alcohol/drugs</li>
                                </ul>

                                <p className="text-gray-600 mb-2 font-medium">Usage Limit (Rental):</p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>There is no per day limit for time or km</li>
                                    <li>Total Usage Km will be considered as per the plan.</li>
                                </ul>

                                <p className="text-gray-600 mb-2 font-medium">Swapping:</p>
                                <p className="text-gray-600 mb-3 ml-4">
                                    Outside BiGo-supported zones, charging must be arranged by the Client
                                </p>

                                <p className="text-gray-600 mb-2 font-medium">Breakdowns:</p>
                                <p className="text-gray-600 mb-2 ml-4">BiGo provides:</p>
                                <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                    <li>On-road support (within service zone)</li>
                                    <li>Replacement bike subject to availability</li>
                                </ul>
                                <p className="text-gray-600 ml-4 italic">Breakdowns caused by negligence are chargeable.</p>
                            </div>
                        </div>
                    </section>

                    {/* Prohibited Uses */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                            3. Prohibited Uses (Applies to All Clients)
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                Clients may not use the EV bike for:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-3">
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Illegal activities</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Stunts, racing, or dangerous driving</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Overloading or unsafe transport</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Subleasing to third parties</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Transport of hazardous materials</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Activities outside authorized territory</span>
                                </div>
                            </div>
                            <p className="text-gray-600 ml-4 font-medium">
                                BiGo may terminate service immediately without refund if misconduct is found.
                            </p>
                        </div>
                    </section>

                    {/* Payments & Billing */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                            4. Payments & Billing
                        </h3>
                        <div className="ml-11">
                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                <li>All payments must be made in advance.</li>
                                <li>Prices are exclusive of GST.</li>
                                <li>There are some cases where BiGo initiate refund.</li>
                                <li>Extra usage charges for km is applicable as per pricing sheet.</li>
                                <li>BiGo reserves the right to revise pricing without prior notice.</li>
                            </ul>
                        </div>
                    </section>

                    {/* KYC & Verification */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">5</span>
                            5. KYC & Verification
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                Prior to service activation, Clients (Business) must submit valid KYC details:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                                <li>Business registration documents</li>
                                <li>Authorized signatory ID</li>
                                <li>GST certificate (if applicable)</li>
                            </ul>

                            <p className="text-gray-600 mb-2 font-medium">Required KYC Documents Individual Riders (Delivery Partners):</p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                                    <li>Aadhaar Card (mandatory for identity & address verification)</li>
                                    <li>PAN Card (for financial and compliance verification)</li>
                                    <li>Driving License (DL) – valid two-wheeler license required</li>
                                    <li>Live Selfie for Verification (matched with KYC documents)</li>
                                    <li>Emergency Contact Details (verified mobile number)</li>
                                </ul>
                            </div>
                            <p className="text-gray-600 ml-4 italic">
                                Service may be withheld until verification is complete.
                            </p>
                        </div>
                    </section>

                    {/* Client Responsibilities */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">6</span>
                            6. Client Responsibilities
                        </h3>
                        <div className="ml-11">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">For Dedicated Rider Model:</h4>
                            <p className="text-gray-600 mb-2 ml-4">Client must ensure:</p>
                            <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1 ml-4">
                                <li>A safe working environment for the Pilot</li>
                                <li>Access to drinking water, restrooms, and breaks</li>
                                <li>No misuse of the Pilot for personal tasks</li>
                                <li>Respectful and professional treatment</li>
                            </ul>
                            <p className="text-gray-600 mb-4 ml-4 italic">
                                If mistreatment is detected, BiGo may immediately cancel the service.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">For Rental Service:</h4>
                            <p className="text-gray-600 mb-2 ml-4">Client must ensure the rider:</p>
                            <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1 ml-4">
                                <li>Uses the bike responsibly</li>
                                <li>Reports damages immediately</li>
                                <li>Swap the battery</li>
                                <li>Avoids harsh handling or negligent riding</li>
                            </ul>
                            <p className="text-gray-600 mb-4 ml-4 italic">
                                Accidental or negligent damage will be billed to the Client.
                            </p>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">All Clients Must:</h4>
                            <ul className="list-disc pl-5 text-gray-600 space-y-1 ml-4">
                                <li>Pay for tolls, parking, and challans</li>
                                <li>Use the bike only within Kolkata city limits unless approved</li>
                                <li>Follow all traffic and safety norms</li>
                            </ul>
                        </div>
                    </section>

                    {/* Damage, Theft & Insurance */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">7</span>
                            7. Damage, Theft & Insurance
                        </h3>
                        <div className="ml-11">
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Dedicated Rider Model:</h4>
                            <p className="text-gray-600 mb-2 ml-4 font-medium">BiGo handles:</p>
                            <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1 ml-4">
                                <li>Regular maintenance</li>
                                <li>Insurance</li>
                                <li>Charging</li>
                            </ul>
                            <p className="text-gray-600 mb-2 ml-4 font-medium">Client is liable for:</p>
                            <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1 ml-4">
                                <li>Damages arising from Client instructions</li>
                                <li>Any losses caused by misuse or negligence</li>
                            </ul>

                            <h4 className="text-lg font-medium text-gray-700 mb-2">Rental Service:</h4>
                            <p className="text-gray-600 mb-2 ml-4 font-medium">Client is fully responsible for:</p>
                            <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1 ml-4">
                                <li>Traffic fines</li>
                                <li>Accidents caused by the rider</li>
                                <li>Tyre, brake, or structural damage from rough usage</li>
                                <li>Theft due to negligence</li>
                                <li>Lost keys, helmets, or accessories</li>
                            </ul>
                            <p className="text-gray-600 ml-4 italic">
                                Insurance claims must follow insurer rules; deductibles/non-claimable parts must be paid by Client.
                            </p>
                        </div>
                    </section>

                    {/* Limitation of Liability */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">8</span>
                            8. Limitation of Liability
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                BiGo is not liable for:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-3">
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Business losses, missed deadlines, delays</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Acts or omissions of the Pilot</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Damages due to traffic, weather, or third-party incidents</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Operational issues caused by Client usage</span>
                                </div>
                            </div>
                            <p className="text-gray-600 ml-4 font-medium">
                                BiGo's maximum liability shall not exceed the rental fee paid for the specific service.
                            </p>
                        </div>
                    </section>

                    {/* Service Suspension or Termination */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">9</span>
                            9. Service Suspension or Termination
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                BiGo may suspend/terminate the service if:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 mb-3">
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Payments are delayed</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">KYC is incomplete or invalid</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Pilot is mistreated (Only applicable for B2B service)</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Vehicle is misused</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Rider violates traffic laws</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-bigo-green mr-2">•</span>
                                    <span className="text-gray-600">Bike is taken outside allowed territory</span>
                                </div>
                            </div>
                            <p className="text-gray-600 ml-4 font-medium">
                                No refund will be issued upon termination.
                            </p>
                        </div>
                    </section>

                    {/* Intellectual Property */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">10</span>
                            10. Intellectual Property
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                All material on BiGo's website/app—including text, images, logos, videos, trademarks, and software—is owned by BiGo.
                            </p>
                            <p className="text-gray-600 ml-4 font-medium">
                                No material may be copied, published, or redistributed without written consent.
                            </p>
                        </div>
                    </section>

                    {/* Privacy & Data Usage */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">11</span>
                            11. Privacy & Data Usage
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                By using BiGo services, you consent to BiGo's data practices, including:
                            </p>
                            <ul className="list-disc pl-5 text-gray-600 mb-3 space-y-1">
                                <li>GPS tracking of bikes and Pilots</li>
                                <li>Time logs and trip records</li>
                                <li>Communication logs</li>
                                <li>Billing history</li>
                                <li>Usage analytics</li>
                            </ul>
                            <p className="text-gray-600">
                                Data is used to improve service quality, safety, and compliance.
                            </p>
                        </div>
                    </section>

                    {/* Updates to Terms & Conditions */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">12</span>
                            12. Updates to Terms & Conditions
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                BiGo may update or modify these Terms at any time.
                            </p>
                            <p className="text-gray-600 mb-3">
                                Continued use of BiGo services indicates acceptance of updated Terms.
                            </p>
                            <p className="text-gray-600">
                                Customer will also receive an outlet of updated T & C.
                            </p>
                        </div>
                    </section>

                    {/* Governing Law & Jurisdiction */}
                    <section className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <span className="bg-bigo-green text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">13</span>
                            13. Governing Law & Jurisdiction
                        </h3>
                        <div className="ml-11">
                            <p className="text-gray-600 mb-3">
                                These Terms are governed by the laws of India.
                            </p>
                            <p className="text-gray-600 font-medium">
                                Courts in Kolkata, West Bengal shall have exclusive jurisdiction over all disputes.
                            </p>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-gray-200 pt-6 mt-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">Need Help?</h4>
                            <p className="text-gray-600 text-sm mb-2">
                                If you have any questions about these Terms & Conditions, please contact us:
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <a href="mailto:ankit@bigo.bike" className="text-bigo-green hover:underline">
                                    ankit@bigo.bike
                                </a>
                                <a href="tel:+919831012456" className="text-bigo-green hover:underline">
                                    +91 9831012456
                                </a>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            By using BiGo.bike services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
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

export default TermsConditions;