import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mainlogo from '../assets/mainlogo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu

    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');

      // Use setTimeout to wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If already on homepage, just scroll
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // Height of fixed header (h-16 = 4rem = 64px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToForm = () => {
    setIsOpen(false); // Close mobile menu

    if (location.pathname !== '/') {
      navigate('/');

      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          const headerHeight = 64;
          const elementPosition = formElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        const headerHeight = 64;
        const elementPosition = formElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Regular navigation for pages (not sections)
  const handlePageNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={mainlogo}
              alt="BiGo.bike Logo"
              className="h-20 w-auto"
              onClick={() => setIsOpen(false)}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Homepage section links */}
            <button
              onClick={() => handleNavigation('about')}
              className="text-gray-700 hover:text-bigo-teal transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('mission-vision')}
              className="text-gray-700 hover:text-bigo-teal transition-colors"
            >
              Our Purpose
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="text-gray-700 hover:text-bigo-teal transition-colors"
            >
              Industries
            </button>
            <button
              onClick={() => handleNavigation('industries')}
              className="text-gray-700 hover:text-bigo-teal transition-colors"
            >
              Services
            </button>



            <button
              onClick={() => handleNavigation('contact-form')}
              className="text-gray-700 hover:text-bigo-teal transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={scrollToForm}
              className="btn-primary"
            >
              Rent a BiGo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {/* Homepage section links */}
              <button
                onClick={() => handleNavigation('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-bigo-teal"
              >
                Services
              </button>

              <button
                onClick={() => handleNavigation('industries')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-bigo-teal"
              >
                Industries
              </button>
              <button
                onClick={() => handleNavigation('founders')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-bigo-teal"
              >
                About
              </button>


              {/* Legal pages */}
              <button
                onClick={() => handlePageNavigation('/privacy-policy')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-bigo-teal"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handlePageNavigation('/terms-conditions')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-bigo-teal"
              >
                Terms & Conditions
              </button>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className="w-full text-left px-3 py-2 text-bigo-teal font-semibold"
              >
                Rent a BiGo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;