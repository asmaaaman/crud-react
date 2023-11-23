import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  to?: any;
  title: string;
  btnClass: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  to,
  title,
  btnClass,
  type,
  onClick,
}) => {
  if (to) {
    return (
      <Link to={to} className={btnClass}>
        {title}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={btnClass} type={type}>
        {title}
      </button>
    );
  }
};

export default Button;
