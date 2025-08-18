
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BusinessPartner from '@/components/BusinessPartner';
import MissionVision from '@/components/MissionVision';
import Services from '@/components/Services';
import IndustryShowcase from '@/components/IndustryShowcase';
import Pricing from '@/components/Pricing';
import Founders from '@/components/Founders';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BusinessPartner />
      <MissionVision />
      <Services />
      <IndustryShowcase />
      <Pricing />
      <Founders />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
