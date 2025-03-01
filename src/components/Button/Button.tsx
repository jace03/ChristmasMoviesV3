import React from "react";
import "./Button.css"; 

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className,
  disabled = false,
  style,
  variant = "primary", 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variant} ${className}`} 
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
