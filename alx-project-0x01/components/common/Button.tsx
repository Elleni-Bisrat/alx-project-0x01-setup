import React from "react";

export interface ButtonProps {
  title: string;
  styles?: string; // Additional Tailwind styles
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, styles = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition rounded-md ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
