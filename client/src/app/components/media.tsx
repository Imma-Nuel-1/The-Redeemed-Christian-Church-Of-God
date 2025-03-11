import React from "react";

interface MediaProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const Media: React.FC<MediaProps> = ({ title, imageSrc, imageAlt }) => {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-lg font-bold">{title}</span>
      </div>
    </div>
  );
};

export default Media;
