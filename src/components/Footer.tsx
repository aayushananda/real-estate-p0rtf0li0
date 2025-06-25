import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Mobile Contact Section - Only visible on mobile */}
      <section className="md:hidden bg-white py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>
            GET IN TOUCH
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <a href="tel:+9711234567" className="text-lg text-gray-700 hover:text-accent transition-colors">
                (+971) 1234567
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <a href="mailto:email@gmail.com" className="text-lg text-gray-700 hover:text-accent transition-colors">
                email@gmail.com
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div className="text-gray-700">
                <p>Address line</p>
                <p>Address line</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <Facebook className="w-8 h-8 text-gray-600 hover:text-accent cursor-pointer transition-colors" />
            <Instagram className="w-8 h-8 text-gray-600 hover:text-accent cursor-pointer transition-colors" />
            <Linkedin className="w-8 h-8 text-gray-600 hover:text-accent cursor-pointer transition-colors" />
            <Youtube className="w-8 h-8 text-gray-600 hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                TAZ MOHAMMAD
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your trusted partner in Dubai real estate. Specializing in luxury properties and investment opportunities in the heart of the UAE.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-accent uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-accent transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors text-sm">About</a></li>
                <li><a href="#properties" className="text-gray-300 hover:text-accent transition-colors text-sm">Properties</a></li>
                <li><a href="#search" className="text-gray-300 hover:text-accent transition-colors text-sm">Home Search</a></li>
                <li><a href="#communities" className="text-gray-300 hover:text-accent transition-colors text-sm">Communities</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-accent uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">Property Sales</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">Property Management</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">Investment Consultation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">Market Analysis</a></li>
                <li><a href="#" className="text-gray-300 hover:text-accent transition-colors text-sm">Property Valuation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-accent uppercase tracking-wider">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-gray-300 text-sm">(+971) 1234567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-gray-300 text-sm">email@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div className="text-gray-300 text-sm">
                    <p>Address line</p>
                    <p>Address line</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Taz Mohammad Real Estate. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 