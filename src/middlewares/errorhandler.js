function errorhandler(err, req, res, next) {
  res.status(err.statusCode || 500).send({ error: err.message });
}

export { errorhandler };
