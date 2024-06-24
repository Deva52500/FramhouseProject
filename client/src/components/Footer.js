import React from 'react';

const Footer = ({ fixed }) => {
  return (
    <footer className={`footer ${fixed ? 'fixed-footer' : ''}`}>
      <div className="container">
        <p className="text-muted">&copy; {new Date().getFullYear()} Farmhouse Project</p>
      </div>
    </footer>
  );
};

export default Footer;
