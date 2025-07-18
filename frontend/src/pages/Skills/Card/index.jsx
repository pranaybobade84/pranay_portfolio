import { Award } from "lucide-react";

const SkillCard = ({
  name,
  category,
  level,
  progressPercent,
  isFeatured,
}) => {
  return (
    <div className="relative bg-[#111] border border-red-600/20 rounded-2xl p-6 shadow-md hover:shadow-red-500/40 hover:scale-[1.02] transition-all duration-300 ease-in-out w-full flex flex-col gap-4 md:flex-row md:items-center justify-between">
      {/* Featured Ribbon */}
      {isFeatured && (
        <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-3 py-1 text-xs font-bold rounded-tr-xl rounded-bl-xl flex items-center gap-1 shadow-md">
          <Award className="h-4 w-4" />
          Featured
        </div>
      )}

      {/* Name & Info */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide mb-1">
          {name}
        </h3>
        <p className="text-sm text-gray-400 font-medium">
          {category} &mdash; {level}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 w-full md:w-[50%]">
        <div className="w-full bg-red-900/30 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-right text-xs text-gray-400 mt-1 font-mono">
          {progressPercent}%
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
