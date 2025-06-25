import React, { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about-section py-20 md:py-32 bg-gray-100">
      <div className="container px-4 max-w-9xl mx-auto">
        {/* Top heading section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-2 tracking-tight">
            DUBAI'S #1 LUXURY REAL ESTATE SPECIALIST
          </h1>
          <p className="uppercase tracking-widest text-gray-500 mt-2 text-sm">
            THE LAST 7 CONSECUTIVE YEARS
          </p>
        </div>

        {/* Brief introduction */}
        {/* <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 20 years of experience, Kumara Wilcoxon is the face of Austin's luxury
            real estate market, with unparalleled passion and commitment to the Austin Lifestyle.
          </p>
        </div> */}

        {/* Main content grid - Modified width and height */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-0 items-stretch px-8">
          {/* Left column - Image with hover effect */}
          <div 
            className="relative overflow-hidden min-h-[700px] lg:min-h-[850px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src="/About1.png" 
              alt="Kumara Wilcoxon" 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
            />
            <img 
              src="/Abou2.jpg"
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
                MEET TAZ MOHAMMAD
              </h2>
              
              <div className="space-y-4 mb-12 text-black leading-relaxed">
                <p>
                 Taz Mohammed is a leading force in Dubai’s competitive real estate market, with over 7 years of experience and a transaction portfolio exceeding $30 million. Known for his sharp market intelligence and results-driven approach, Taz has successfully guided more than 60 clients from around the world through high-stakes property deals across Dubai’s most coveted communities. From first-time buyers to seasoned investors, his expertise spans off-plan investments, luxury rentals, and secondary market acquisitions—each tailored with precision and insight.
                </p>
                <p>
                  Recognized for his client-first philosophy and strategic acumen, 
                  Taz blends integrity with a deep understanding of Dubai’s real estate pulse. 
                  Backed by strong developer networks, legal expertise, and a command over ROI analytics, 
                  he delivers a seamless, data-informed experience from consultation to close. 
                  For those seeking trusted guidance and exceptional outcomes, 
                  Taz Mohammed isn’t just a consultant—he’s your partner in building legacy through real estate.


                 
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