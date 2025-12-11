
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    fleetSize: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      fleetSize: '',
      message: ''
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="section-padding bg-gray-50" id="contact-form">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            GET STARTED WITH
            <br />
            <span className="text-bigo-teal">BIGO.BIKE</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ready to transform your business mobility? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>
                  Get in touch with our team for personalized solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-bigo-teal-light/20 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-bigo-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">ankit@bigo.bike</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-bigo-green-light/20 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-bigo-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 9831012456</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-bigo-blue-light/20 rounded-lg p-3">
                    <MapPin className="w-6 h-6 text-bigo-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">Bangalore, Karnataka, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-bigo-teal-light/20 rounded-lg p-3">
                    <Building2 className="w-6 h-6 text-bigo-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600"> Mon-Sat 10Am-7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-green-gradient rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose BiGo.bike?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Flexible Subscription Plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Real-time Fleet Tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Eco-friendly Solutions</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request a Quote</CardTitle>
              <CardDescription>
                Tell us about your business needs and we'll create a custom solution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delivery">Delivery Services</SelectItem>
                        <SelectItem value="corporate">Corporate Transportation</SelectItem>
                        <SelectItem value="logistics">Logistics Solutions</SelectItem>
                        <SelectItem value="food-delivery">Food Delivery</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fleetSize">Expected Fleet Size</Label>
                    <Select value={formData.fleetSize} onValueChange={(value) => handleChange('fleetSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fleet size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 vehicles</SelectItem>
                        <SelectItem value="6-20">6-20 vehicles</SelectItem>
                        <SelectItem value="21-50">21-50 vehicles</SelectItem>
                        <SelectItem value="51-100">51-100 vehicles</SelectItem>
                        <SelectItem value="100+">100+ vehicles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us more about your specific requirements..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full btn-primary">
                  Submit Request
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
