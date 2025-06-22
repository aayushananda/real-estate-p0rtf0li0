import React, { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about-section py-20 md:py-32 bg-gray-100">
      <div className="container px-4 max-w-9xl mx-auto">
        {/* Top heading section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-2 tracking-tight">
            AUSTIN'S #1 LUXURY REAL ESTATE AGENT
          </h1>
          <p className="uppercase tracking-widest text-gray-500 mt-2 text-sm">
            THE LAST 5 CONSECUTIVE YEARS
          </p>
        </div>

        {/* Brief introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 20 years of experience, Kumara Wilcoxon is the face of Austin's luxury
            real estate market, with unparalleled passion and commitment to the Austin Lifestyle.
          </p>
        </div>

        {/* Main content grid - Modified width and height */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-0 items-stretch px-8">
          {/* Left column - Image with hover effect */}
          <div 
            className="relative overflow-hidden min-h-[700px] lg:min-h-[850px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src="/About2.png" 
              alt="Kumara Wilcoxon" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <img 
              src="/About1.png"
              alt="Kumara Wilcoxon Alternative" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Right column - Text content with light background */}
          <div 
            className="text-black p-8 md:p-12 lg:p-16 h-full flex flex-col justify-center"
            style={{ backgroundColor: '#EFE4D2' }}
          >
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-8 leading-tight tracking-tight">
                MEET KUMARA<br />WILCOXON
              </h2>
              
              <div className="space-y-4 mb-12 text-black leading-relaxed">
                <p>
                  With over 20 years of experience, Kumara Wilcoxon is the face of Austin's
                  luxury real estate market, with unparalleled passion and commitment to the
                  Austin Lifestyle. As the #1 agent in Austin, TX, the #1 agent worldwide for
                  Sotheby's International Realty, and the 2024 winner of the Inman Golden i,
                  Kumara has sold over $2.5 Billion throughout her career.
                </p>
                <p>
                  Consistently honored among Austin's select multi-million dollar producers, she has been
                  ranked #1 by Austin Business Journal for Residential Real Estate Agents for the last five
                  consecutive years and is a distinguished member of both Austin's Elite 25,
                  Sotheby's International Realty Market Leaders, Métier Maison, Sotheby's
                  International Realty's Top 100, and Luxury League.
                </p>
              </div>
              
              {/* Enlarged button */}
              <a 
                href="#" 
                className="inline-block border-2 border-black text-black px-12 py-4 font-medium text-base md:text-lg uppercase tracking-wider hover:bg-black hover:text-white transition duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;