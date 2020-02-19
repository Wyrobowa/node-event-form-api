/**
 * errorHandler - overwrites default express handler
 *
 * @param {object} error
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const { message, data, validation } = error;

  res.status(status).json({
    status,
    message,
    data,
    validation,
    type: 'errorHandler',
  });
};

/**
 * error404Handler - overwrites default express handler for 404 error
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
// eslint-disable-next-line no-unused-vars
const error404Handler = (req, res, next) => {
  const status = 404;

  res.status(status).json({
    status,
    message: `Route: ${req.url} not found`,
    type: 'error404Handler',
  });
};

/**
 * catchErrors - used for asynchronous functions,
 * when error appears, it skips current function, shows error and move to next one
 *
 * @param {function} fn
 * @returns {function(...[*]=)}
 */
const catchErrors = (fn) => function (req, res, next) {
  fn(req, res, next).catch(next);
};

module.exports = {
  errorHandler,
  error404Handler,
  catchErrors,
};
