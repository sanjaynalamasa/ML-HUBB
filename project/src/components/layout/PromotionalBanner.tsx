import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const animatePromo = () => {
      const width = window.innerWidth;
      setPosition(prev => {
        const newPos = prev + 1;
        return newPos > width ? -width : newPos;
      });
    };

    const interval = setInterval(animatePromo, 20);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden sticky top-0 z-50">
      <div className="container mx-auto relative h-12">
        <div 
          className="absolute whitespace-nowrap py-3"
          style={{ transform: `translateX(${position}px)` }}
        >
          <p className="text-sm md:text-base font-medium inline-block">
            ML HUB is in Development mode. Soon it will be launched. Just Wait... ✨
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-1 transition-colors z-10"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}