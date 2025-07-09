
const SkillCard = ({ name, category, level, progressPercent }) => {
  return (
    <div className="flex items-center justify-between bg-[#111] border border-red-600/20 rounded-xl p-6 shadow-md hover:shadow-red-500/40 transition-shadow">
      <div>
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-sm text-gray-400">
          {category} — {level}
        </p>
      </div>
      <div className="w-[50%]">
        <div className="w-full bg-red-800/30 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-red-500 to-yellow-500 h-3 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p className="text-right text-xs text-gray-500 mt-1">
          {progressPercent}%
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
