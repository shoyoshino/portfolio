import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20">
      <div className="container max-w-screen-md mx-auto px-5 py-5">
        <p className="text-xs text-center">© {currentYear} Sho Yoshino. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
