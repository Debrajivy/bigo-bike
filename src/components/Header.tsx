
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-bigo-teal">
            BiGo.bike
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-bigo-teal transition-colors">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-bigo-teal transition-colors">Pricing</a>
            <a href="#industries" className="text-gray-700 hover:text-bigo-teal transition-colors">Industries</a>
            <a href="#founders" className="text-gray-700 hover:text-bigo-teal transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-bigo-teal transition-colors">Reviews</a>
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
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-bigo-teal">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-bigo-teal">Pricing</a>
              <a href="#industries" className="block px-3 py-2 text-gray-700 hover:text-bigo-teal">Industries</a>
              <a href="#founders" className="block px-3 py-2 text-gray-700 hover:text-bigo-teal">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-bigo-teal">Reviews</a>
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
