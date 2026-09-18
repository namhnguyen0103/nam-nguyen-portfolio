import React from "react";

const variants = {
    "primary-default": "bg-gray-900 text-white hover:bg-gray-950",
    "primary-blue": "bg-blue-500 text-white hover:bg-blue-700",
    "primary-orange": "bg-orange-500 text-white hover:bg-orange-700",
    "secondary-default": "text-gray-900 ring-inset ring-1 ring-gray-100 hover:bg-gray-50",
    "secondary-blue": "text-blue-600 ring-inset ring-1 ring-gray-100 hover:ring-gray-200 hover:bg-gray-100",
    "secondary-orange": "text-orange-600 ring-inset ring-1 ring-gray-100 hover:ring-gray-200 hover:bg-gray-100",
};

const sizes = {
    "large": "px-6 py-2 text-label-L-general",
    "medium": "px-4 py-1.5 text-label-M-general",
    "small": "px-3 py-1 text-label-S-general"
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary-default" | "primary-blue" | "primary-orange" | "secondary-default" | "secondary-blue" | "secondary-orange";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary-default",
  size = "medium",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${variants[variant]} ${sizes[size]} font-bold rounded-full`}>
      {children}
    </button>
  );
}