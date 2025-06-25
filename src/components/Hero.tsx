import React, { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize video properties
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error('Autoplay failed:', e));
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    
    if (!videoRef.current) return;
    
    // Toggle mute state
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRef.current.muted = newMutedState;
    
    // Handle Chrome's autoplay policy
    if (!newMutedState && !isPlaying) {
      videoRef.current.play()
        .then(() => {
          console.log('Audio started successfully');
          setIsPlaying(true);
        })
        .catch(e => {
          console.error('Audio playback failed:', e);
          // Show instructions if audio is blocked
          alert('Your browser blocked audio. Please click "Allow" in the address bar to enable sound.');
        });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        muted={isMuted}
      >
        <source src="/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sound toggle button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 px-4 py-2 bg-white/80 text-black rounded-full backdrop-blur-md hover:bg-white transition flex items-center gap-2 shadow-lg"
      >
        {isMuted ? (
          <>
            <span className="text-xl">🔇</span>
            <span>Sound Off</span>
          </>
        ) : (
          <>
            <span className="text-xl">🔊</span>
            <span>Sound On</span>
          </>
        )}
      </button>

      {/* Status indicator */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          TAZ MOHAMMAD
        </h1>
      </div>
    </section>
  );
};

export default Hero;