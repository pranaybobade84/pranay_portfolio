export const asyncHandler = (cb) => {
  return function (req, res, next) {
    Promise.resolve(cb(req, res, next)).catch(next);
  };
};
