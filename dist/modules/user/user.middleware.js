"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserCreateParam = void 0;
const celebrate_1 = require("celebrate");
exports.validateUserCreateParam = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required(),
    }),
});
