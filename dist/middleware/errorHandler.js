"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationError_1 = require("../utils/ApplicationError");
const celebrate_1 = require("celebrate");
const http_status_codes_1 = require("http-status-codes");
const celebrateErrorHandler = (0, celebrate_1.errors)();
const errorHandler = (error, req, res, next) => {
    if ((0, celebrate_1.isCelebrateError)(error)) {
        // logger.error({
        //   message: 'Joi validation error',
        //   meta: {
        //     ...log_meta,
        //     details: Object.fromEntries(err.details),
        //   },
        //   error: err,
        // })
        return celebrateErrorHandler(error, req, res, next);
    }
    if (error instanceof ApplicationError_1.ApplicationError) {
        return res.status(error.statusCode).json(error.message);
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json('internal Server error');
};
exports.default = errorHandler;
