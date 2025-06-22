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
    padding: '0 1rem'
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
    <div style={containerStyle}>
      <h1 style={headingStyle}>Parallax Effect</h1>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        ratione vitae, suscipit molestias at magni necessitatibus voluptate 
        blanditiis nulla excepturi nisi provident illum.
      </p>
    </div>
  );
};

export default Parallax;
