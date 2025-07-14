'use client';

import Image from "next/image";

const getProficiencyLevel = (percent) => {
  if (percent <= 40) return "Beginner";
  if (percent <= 70) return "Intermediate";
  if (percent <= 90) return "Advanced";
  return "Expert";
};

const getBarGradient = (percent) => {
  if (percent <= 40) return "from-green-100 to-green-400";
  if (percent <= 70) return "from-green-400 to-green-600";
  if (percent <= 90) return "from-green-600 to-green-800";
  return "from-green-800 to-green-900";
};

const SkillItem = ({ icon, label, percent = 0 }) => {
  const level = getProficiencyLevel(percent);
  const gradientClass = getBarGradient(percent);

  return (
    <div className="mb-5 flex items-center gap-4 w-full max-w-md">
      <Image
        src={icon}
        alt={label}
        width={40}
        height={40}
        className="rounded-md object-contain"
      />

      <div className="w-full">
        <div className="flex justify-between items-center text-sm mb-1">
          <span className="font-semibold text-black dark:text-white">{label}</span>
          <span className="text-xs px-2 py-[2px] rounded-full bg-transparent text-black dark:text-gray-300 border border-gray-600">
            {level}
          </span>
        </div>

        <div className="w-full h-2 bg-transparent rounded-md overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${gradientClass}`}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
