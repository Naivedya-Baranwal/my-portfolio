"use client"
import { useRef, useState } from "react";

const SpotlightWrapper = ({ children, spotlightColor = "rgba(0, 229, 255, 0.15)", className = "" }) => {
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(0.4)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out z-10"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightWrapper;
