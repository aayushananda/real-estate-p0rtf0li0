import React, { useState, ChangeEvent, FormEvent } from 'react';
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
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <p className="text-gray-600 text-sm mb-8">
            Let me know how I can assist you.
          </p>
          
          <h1 className="text-4xl font-light text-gray-800 mb-12 tracking-wide">
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
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
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
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 p-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 resize-none"
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
                By providing Kumara Wilcoxon* your contact information, you acknowledge and 
                agree to our Privacy Policy and consent to receiving marketing communications, 
                including through automated calls, texts, and emails, some of which may use 
                artificial or prerecorded voices. This consent isn't necessary for purchasing any 
                products or services and you may opt out at any time. To opt out from texts, you 
                can reply 'stop' at any time. To opt out from emails, you can click on the 
                unsubscribe link in the emails. Message and data rates may apply.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="w-full py-4 border-2 border-gray-800 text-gray-800 font-light tracking-wider hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Profile and Background */}
      <div 
        className="w-full md:w-1/2 relative min-h-[600px] md:min-h-screen"
        style={{
          backgroundImage: 'url("/counter2.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-12 text-white">
          {/* Top Section - Name and Contact Info */}
          <div>
            <h2 className="text-4xl font-light tracking-wider mb-8">
              KUMARA WILCOXON
            </h2>
            
            <div className="space-y-2 mb-8">
              <p className="text-lg">kumara@sothebysrealty.com</p>
              <p className="text-lg">512.423.5035</p>
            </div>
            <div className="space-y-1">
              <p className="text-lg">524 N Lamar Blvd #204</p>
              <p className="text-lg">Austin TX 78703</p>
            </div>
          </div>

          {/* Bottom Section - Social Media and Profile Photo */}
          <div className="flex justify-between items-end">
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Facebook className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 hover:text-gray-300 cursor-pointer transition-colors" />
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;