
import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
  className?: string;
}

export function VideoPlayer({ videoUrl, poster, className = '' }: VideoPlayerProps) {
  return (
    <video 
      className={`w-full h-full object-cover ${className}`}
      controls
      poster={poster}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
