import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<CTAButtonProps> = ({
  text,
  href,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}) => {
  const baseClasses = "px-4 py-2 rounded-full transition-all";
  const defaultClasses =
    disabled && "bg-gray-400 text-gray-700 cursor-not-allowed";
  const combinedClasses = `${baseClasses} ${defaultClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} passHref>
        <button type={type} className={combinedClasses} disabled={disabled}>
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
