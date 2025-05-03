"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
require("./db/sqlite/connect");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', index_routes_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => console.log(`server running on ${PORT}`));
