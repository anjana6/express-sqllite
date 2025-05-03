"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbLite = void 0;
const sqlite3_1 = __importDefault(require("sqlite3"));
const sql3 = sqlite3_1.default.verbose(); // which helps with debugging by printing extended stack traces when an error occurs.
const dbLite = new sql3.Database('./src/db/sqlite/key.db', sql3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error('Error opening database ' + error.message);
    }
    console.log('Connected to the SQLite database.');
});
exports.dbLite = dbLite;
const sql = `CREATE TABLE IF NOT EXISTS keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL
)`;
dbLite.run(sql, (error) => {
    if (error) {
        console.error('Error creating table ' + error.message);
    }
    else {
        console.log('Table created or already exists.');
    }
});
