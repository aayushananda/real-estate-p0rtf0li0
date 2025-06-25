import React from 'react';

const Parallax = () => {
  const containerStyle: React.CSSProperties = {
    height: '80vh', 
    backgroundImage: 'url("/parallax.jpg")',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    flexDirection: 'column',
    padding: '0 1rem',
    zIndex: 5,
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
  };

  const paragraphStyle = {
    maxWidth: '600px',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    textShadow: '1px 1px 6px rgba(0,0,0,0.4)'
  };

  return (
    <div className="bg-gray-700/50 z-10" style={containerStyle}>
       {/* Light Grey Overlay */}
        <div className="absolute inset-0 z-20"></div>
      <h1 style={headingStyle}>Client First Policy</h1>
      <p style={paragraphStyle}>
        Taz’s business is built almost entirely on referrals and repeat clients—a testament to his
commitment to delivering outstanding results. He listens to understand each client's unique
needs and tailors his services to provide a smooth, stress-free, and successful experience.
      </p>
    </div>
  );
};

export default Parallax;
