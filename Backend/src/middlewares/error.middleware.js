export const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 400;

  res.status(status).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};
