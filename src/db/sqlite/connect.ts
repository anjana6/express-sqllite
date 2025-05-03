import sqlite3 from 'sqlite3'
const sql3 = sqlite3.verbose()  // which helps with debugging by printing extended stack traces when an error occurs.

const dbLite = new sql3.Database('./src/db/sqlite/key.db', sql3.OPEN_READWRITE, (error) => {
    if (error) {
        console.error ('Error opening database ' + error.message)
    }
    console.log('Connected to the SQLite database.')
})

const sql = `CREATE TABLE IF NOT EXISTS keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    key TEXT NOT NULL
)`;

dbLite.run(sql, (error) => {
    if (error) {
        console.error('Error creating table ' + error.message)
    } else {
        console.log('Table created or already exists.')
    }
})



export {dbLite} ;