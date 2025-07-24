import React, { Suspense } from "react";

const Loadable = (Component, fallbackText = "Loading...") => {
  return (
    <Suspense fallback={<div className="text-white text-center py-6">{fallbackText}</div>}>
      <Component />
    </Suspense>
  );
};

export default Loadable;
