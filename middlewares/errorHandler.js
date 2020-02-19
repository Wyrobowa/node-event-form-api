/**
 * catchErrors - used for asynchronous functions,
 * when error appears, it skips current function, shows error and move to next one
 *
 * @param fn
 * @returns {function(...[*]=)}
 */
const catchErrors = (fn) => function (req, res, next) {
  fn(req, res, next).catch(next);
};

module.exports = {
  catchErrors,
};
