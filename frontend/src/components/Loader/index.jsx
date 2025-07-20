export const ShimmerLoader = () => {
  return (
    <div className="animate-pulse space-y-4 p-4">
      <div className="h-5 bg-red-500/30 rounded w-1/3" />
      <div className="h-4 bg-red-500/20 rounded w-full" />
      <div className="h-4 bg-red-500/20 rounded w-2/3" />
      <div className="h-4 bg-red-500/20 rounded w-1/2" />
      <div className="flex space-x-2 mt-4">
        <div className="h-6 w-16 bg-red-500/10 rounded" />
        <div className="h-6 w-16 bg-red-500/10 rounded" />
      </div>
    </div>
  );
};
