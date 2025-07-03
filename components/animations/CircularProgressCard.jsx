import React, { useState } from 'react';

const CircularProgressCard = ({ solved, total, easySolved, mediumSolved, hardSolved }) => {
  const [hovered, setHovered] = useState(null);

  const easyPercent = (easySolved / solved) * 100;
  const mediumPercent = (mediumSolved / solved) * 100;
  const hardPercent = (hardSolved / solved) * 100;

  const radius = 50;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  const getStrokeProps = (startPercent, lengthPercent) => ({
    strokeDasharray: `${(lengthPercent / 100) * circumference} ${circumference}`,
    strokeDashoffset: -((startPercent / 100) * circumference),
  });

  const displayText = () => {
    switch (hovered) {
      case 'easy':
        return `Easy: ${easySolved}/${solved}`;
      case 'medium':
        return `Medium: ${mediumSolved}/${solved}`;
      case 'hard':
        return `Hard: ${hardSolved}/${solved}`;
      default:
        return `${solved}/${total}`;
    }
  };

  return (
<div className="relative w-36 h-36 text-center group rounded-full overflow-hidden">
    <svg
        width="100%"
        height="100%"
        viewBox="0 0 120 120"
        className="rotate-[-90deg] bg-transparent"
      >
        {/* Background Track Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#2d2d2d"
          strokeWidth={stroke}
          fill="none"
        />

        {/* Easy Segment */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#22c55e"
          strokeWidth={stroke}
          fill="none"
          {...getStrokeProps(0, easyPercent)}
          onMouseEnter={() => setHovered('easy')}
          onMouseLeave={() => setHovered(null)}
        />

        {/* Medium Segment */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#facc15"
          strokeWidth={stroke}
          fill="none"
          {...getStrokeProps(easyPercent, mediumPercent)}
          onMouseEnter={() => setHovered('medium')}
          onMouseLeave={() => setHovered(null)}
        />

        {/* Hard Segment */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ef4444"
          strokeWidth={stroke}
          fill="none"
          {...getStrokeProps(easyPercent + mediumPercent, hardPercent)}
          onMouseEnter={() => setHovered('hard')}
          onMouseLeave={() => setHovered(null)}
        />
      </svg>

      {/* Center Text (inherits text-white from global) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold pointer-events-none">
        {displayText()}
      </div>
    </div>
  );
};

export default CircularProgressCard;

