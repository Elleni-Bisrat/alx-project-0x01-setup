import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Daily Contents. All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
