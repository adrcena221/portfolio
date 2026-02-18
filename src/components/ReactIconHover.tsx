import React, { useState } from "react";

interface ReactIconHoverProps {
  icons: React.ReactNode;
  href?: string;
  copyText?: string;
}

export const ReactIconHover: React.FC<ReactIconHoverProps> = ({
  icons,
  href,
  copyText,
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (copyText) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error("Clipboard copy failed", err);
      }
    }
  };

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="relative group flex items-center justify-center
                 text-gray-400
                 transition-all duration-300 ease-out
                 hover:text-white
                 hover:-translate-y-1
                 active:scale-95"
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 rounded-full 
                      bg-cyan-400 opacity-0 blur-xl 
                      transition-all duration-300
                      group-hover:opacity-40" />

      {/* Icon */}
      <div className="relative text-2xl md:text-3xl lg:text-3xl xl:text-5xl">
        {icons}
      </div>

      {/* Premium Tooltip */}
      <span
        className={`absolute -top-10 left-1/2 -translate-x-1/2 
                    text-xs px-3 py-1.5 rounded-md
                    bg-gray-900 text-white
                    shadow-lg
                    transition-all duration-300
                    ${copied
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
      >
        Copied Email
      </span>
    </a>
  );
};
