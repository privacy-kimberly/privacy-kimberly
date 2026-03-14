import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white focus:ring-brand-500 shadow-md hover:shadow-lg",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-800",
    outline: "border-2 border-brand-500 text-brand-500 hover:bg-brand-50 focus:ring-brand-500",
    ghost: "text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
