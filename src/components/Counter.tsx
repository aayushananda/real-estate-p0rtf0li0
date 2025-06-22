import React, { useState, useEffect, useRef } from 'react';

const Counter: React.FC = () => {
  const counterRef = useRef<HTMLElement>(null);
  const [billionCount, setBillionCount] = useState<number>(0);
  const [millionCount, setMillionCount] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const targetBillions: number = 2.5;
  const targetMillions: number = 389;
  
  // Set up intersection observer with lower threshold
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3 // 30% of element must be visible
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isInView]);
  
  // Counter animation for billions
  useEffect(() => {
    if (!isInView) return;
    
    if (billionCount < targetBillions) {
      const timeout = setTimeout(() => {
        // Increment by larger amounts to reach target faster
        const increment = targetBillions / 25; // 25 steps to complete
        const nextValue = Math.min(billionCount + increment, targetBillions);
        setBillionCount(parseFloat(nextValue.toFixed(1)));
      }, 60); // Faster interval
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, billionCount, targetBillions]);
  
  // Counter animation for millions
  useEffect(() => {
    if (!isInView) return;
    
    if (millionCount < targetMillions) {
      const timeout = setTimeout(() => {
        // Calculate increment to complete in ~25 steps
        const increment = Math.ceil(targetMillions / 25);
        const nextValue = Math.min(millionCount + increment, targetMillions);
        setMillionCount(nextValue);
      }, 60); // Faster interval
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, millionCount, targetMillions]);
  
  return (
    <section 
      ref={counterRef}
      className="relative py-20 md:py-32" 
      style={{ backgroundColor: '#BDB19F' }}
    >
      {/* Logo */}
      <div className="container-custom">
       {/* Main content */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-2 tracking-wider text-white">
            PROVEN RESULTS
          </h2>
          <p className="uppercase tracking-widest text-white text-xs mt-3 mb-8">
            CONSISTENTLY HONORED AMONG AUSTIN'S SELECT MULTI-MILLION DOLLAR PRODUCERS
          </p>
          <p className="max-w-3xl text-white/90 text-center mx-auto text-lg leading-relaxed">
            With over 20 years of experience, Kumara Wilcoxon is the face of Austin's luxury real estate market, 
            with unparalleled passion and commitment to the Austin Lifestyle. As the #1 Realtor in Austin, TX for the last 5
            consecutive years, Kumara has sold over $2 Billion throughout her career.
          </p>
        </div>
      </div>
      
      {/* Stats and image grid */}
      <div className="container-custom px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left column - Stats */}
          <div className="text-white space-y-10">
            <div className="mb-12">
              <div className="text-5xl md:text-6xl font-serif font-medium">
                ${billionCount}B
              </div>
              <p className="text-white/70 uppercase tracking-wider text-sm mt-2">
                in Career Sales
              </p>
            </div>
            
            <div className="mb-12">
              <div className="text-5xl md:text-6xl font-serif font-medium">
                #1
              </div>
              <p className="text-white/70 uppercase tracking-wider text-sm mt-2">
                Realtor in Austin
              </p>
            </div>
            
            <div className="mb-12">
              <div className="text-5xl md:text-6xl font-serif font-medium">
                ${millionCount}M
              </div>
              <p className="text-white/70 uppercase tracking-wider text-sm mt-2">
                Total Sales in 2023
              </p>
            </div>
            
            <div className="mb-12">
              <div className="text-5xl md:text-6xl font-serif font-medium">
                #1
              </div>
              <p className="text-white/70 uppercase tracking-wider text-sm mt-2">
                Sotheby's International Realty Agent Worldwide
              </p>
            </div>
          </div>
          
          {/* Right column - Image */}
          <div className="relative h-[450px] lg:h-[600px]">
            <div className="relative h-full w-full">
              <img 
                src="/counter1.jpg" 
                alt="Modern luxury real estate exterior" 
                className="absolute right-0 bottom-0 w-4/5 h-[400px] object-cover rounded-sm shadow-xl"
              />
              <img 
                src="/counter2.jpg"
                alt="Modern luxury real estate interior" 
                className="absolute -top-10 -left-10 w-3/5 h-[250px] object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;