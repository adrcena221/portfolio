import React from "react";

interface IconHoverProps {
  src: string;
  alt: string;
  size?: number; // optional (default: 80)
  url?: string;  // optional link
}

export const IconHover: React.FC<IconHoverProps> = ({
  src,
  alt,
  size = 80,
  url,
}) => {
  const IconImage = (
    <div
      className="relative group flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer"
      style={{ width: size, height: size }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 blur-lg group-hover:opacity-40 transition-opacity duration-300" />

      {/* Icon */}
      <img
        src={src}
        alt={alt}
        className="relative w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  );

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block"
    >
      {IconImage}
    </a>
  ) : (
    IconImage
  );
};
