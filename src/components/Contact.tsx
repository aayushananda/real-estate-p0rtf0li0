import React, { useState, ChangeEvent } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;
    const value = type === 'checkbox'
      ? (e.target as HTMLInputElement).checked
      : e.target.value;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex-col md:flex-row hidden md:flex">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-lg mx-auto w-full">
          <p className="text-gray-600 text-base mb-8 font-light">
            Let me know how I can assist you.
          </p>
          
          <h1 className="text-5xl font-light text-gray-800 mb-12 tracking-wide" style={{ fontFamily: 'Playfair Display, serif' }}>
            GET IN TOUCH
          </h1>

          <div className="space-y-6">
            {/* Name Fields */}
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 bg-gray-50"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 bg-gray-50"
                required
              />
            </div>

            {/* Email and Phone */}
            <div className="flex space-x-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 bg-gray-50"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 bg-gray-50"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-4 border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none bg-gray-50"
              required
            />

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-gray-600 border-gray-300 focus:ring-0"
                required
              />
              <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
            By providing Taz Mohammed with your contact information, you acknowledge and agree to our Privacy Policy and consent to receive marketing communications related to Dubai real estate opportunities. These communications may include emails, calls, or text messages—some of which may be automated or use prerecorded content. Your consent is not a condition for purchasing any property or service, and you may opt out at any time. To stop receiving texts, simply reply 'STOP'. To unsubscribe from emails, click the unsubscribe link provided. Standard messaging and data rates may apply.


              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full py-4 border-2 border-gray-800 text-gray-800 font-light tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300 bg-white"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Profile and Background */}
      <div className="w-full md:w-1/2 relative min-h-[600px] md:min-h-screen">
        {/* Background Image */}        
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url("/counter2.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0
          }}
        ></div>
        {/* Light Grey Overlay */}
        <div className="absolute inset-0 bg-gray-700/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between p-12 text-white">
          {/* Top Section - Name and Contact Info */}
          <div className="pt-8">
            <h2 className="text-4xl font-bold tracking-widest mb-12 text-center" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.2em' }}>
              TAZ MOHAMMAD
            </h2>
            
            <div className="text-center space-y-4 mb-12">
              <p className="text-lg font-semibold">email@gmail.com</p>
              <p className="text-xl font-semibold">(+971) 1234567</p>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Address line</p>
              <p className="text-lg font-semibold">Address line</p>
            </div>
          </div>

          {/* Bottom Section - Social Media Icons */}
          <div className="flex justify-center space-x-8 pb-8">
            <Facebook className="w-8 h-8 hover:text-gray-300 cursor-pointer transition-colors" />
            <Instagram className="w-8 h-8 hover:text-gray-300 cursor-pointer transition-colors" />
            <Linkedin className="w-8 h-8 hover:text-gray-300 cursor-pointer transition-colors" />
            <Youtube className="w-8 h-8 hover:text-gray-300 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
