import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-6">
      <div className="footer-content container mx-auto px-4 flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:justify-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Iqra. All rights reserved.
        </p>
        <ul className="footer-menu flex flex-col md:flex-row gap-4 text-sm">
          <li className="footer-item">
            <a href="#privacy" className="footer-link hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="footer-item">
            <a href="#terms" className="footer-link hover:underline">
              Terms of Service
            </a>
          </li>
          <li className="footer-item">
            <a href="#contact" className="footer-link hover:underline">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
