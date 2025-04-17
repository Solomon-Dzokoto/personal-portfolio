import { context } from "../Hooks/useContextApi";
import { useContext, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string; // Make className optional
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  size = "md",
  ...rest
}: ButtonProps) => {
  const { isPrime } = useContext(context);

  // Base styles that apply to all buttons
  const baseStyles =
    "font-medium rounded-md transition-all duration-300 border-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50";

  // Size variations
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  // Variant styles based on isPrime theme context
  let variantStyles = "";

  if (variant === "primary" && isPrime) {
    variantStyles =
      "bg-primary text-white hover:bg-white hover:text-primary border-primary focus:ring-primary";
  } else if (variant === "primary" && !isPrime) {
    variantStyles =
      "bg-white text-primary hover:bg-primary hover:text-white border-primary focus:ring-primary";
  } else if (variant === "secondary" && isPrime) {
    variantStyles =
      "bg-white text-primary hover:bg-primary hover:text-white border-primary focus:ring-primary";
  } else if (variant === "secondary" && !isPrime) {
    variantStyles =
      "bg-primary text-white hover:bg-white hover:text-primary border-primary focus:ring-primary";
  } else if (variant === "outline") {
    variantStyles =
      "bg-transparent border-gray-600 hover:border-primary text-white hover:text-primary focus:ring-gray-600";
  }

  // Disabled state
  const disabledStyles = rest.disabled
    ? "opacity-60 cursor-not-allowed hover:bg-opacity-100"
    : "hover:transform hover:-translate-y-1";

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles} ${disabledStyles} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
