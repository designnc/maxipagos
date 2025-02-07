// components/ui/Label.tsx
import React from "react";

interface LabelProps {
  className?: string;
  text: string;
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
  return (
    <span
      className={`relative inline-block text-sm font-semibold uppercase text-secondary-950 text-center bg-secondary rounded-full py-2 px-3 overflow-hidden ${className}`}
    >
      {text}
      <span className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-accent to-transparent opacity-10 filter blur-md transform rotate-20 animate-shine"></span>
    </span>
  );
};

export default Label;
