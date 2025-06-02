import React from 'react';

const BubbleBackground = () => {
  return (
    <div className="max-w-2lg relative h-full w-full">
      <div className="animate-blob animation-delay-2000 absolute -left-4 top-0 h-80 w-80 rounded-full bg-primary opacity-50 mix-blend-screen blur-3xl filter"></div>
      <div className="animate-blob absolute -right-8 top-32 h-80 w-80 rounded-full bg-primary-light opacity-50 mix-blend-screen blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-28 top-56 h-80 w-80 rounded-full bg-secondary opacity-40 mix-blend-screen blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute -bottom-60 right-28 h-80 w-80 rounded-full bg-system-success opacity-40 mix-blend-screen blur-3xl filter"></div>
    </div>
  );
};

export default BubbleBackground;
