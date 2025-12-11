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
      <section id="about">

        <BusinessPartner />
      </section>
      <section id="mission-vision">

        <MissionVision />
      </section>

      {/* Services section with ID */}
      <section id="services">
        <Services />
      </section>

      {/* Industry section with ID */}
      <section id="industries">
        <IndustryShowcase />
      </section>


      {/* Contact form with ID */}
      <section id="contact-form">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default Index;