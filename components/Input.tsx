import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent ${className}`}
    />
  );
}
