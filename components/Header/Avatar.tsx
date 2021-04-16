import React from "react";

function Avatar({ url, className }: { url: string; className?: string }) {
  return (
    <img
      loading="lazy"
      className={`h-11 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      src={url}
      alt="profile picture"
    />
  );
}

export default Avatar;
