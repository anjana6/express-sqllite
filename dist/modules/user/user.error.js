"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = void 0;
const ApplicationError_1 = require("../../utils/ApplicationError");
const http_status_codes_1 = require("http-status-codes");
class UserNotFoundError extends ApplicationError_1.ApplicationError {
    constructor(message = 'User not found') {
        super(message, http_status_codes_1.StatusCodes.NOT_FOUND);
    }
}
exports.UserNotFoundError = UserNotFoundError;
