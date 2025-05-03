import { dbLite } from "../../db/sqlite/connect";
import { ApplicationError } from "../../utils/ApplicationError";
import { UserNotFoundError } from "./user.error";

export const fetchUsers = async() => {
    console.log('aaaaaaaaaaaaaaaaa')
    const user = {name: 'anjana'}
    const sql = `SELECT * FROM keys`;

    const keys = await new Promise<{ id: number; key: string }[]>((resolve, reject) => {
        dbLite.all(sql, [], (err, rows) => {
          if (err) {
            reject(new ApplicationError(err.message, 500));
          } else {
            const result = rows.map((row: any) => ({
              id: row.id,
              key: row.key
            }));
            resolve(result);
          }
        });
      });
console.log('keys', keys)
    return keys;
}

export const createUser = (user:any) => {
    const sql = `INSERT INTO keys (key) VALUES (?)`;
    dbLite.run(sql, ['123456'], function (err) {
        if (err) {
            throw new ApplicationError(err.message, 500);
        }
        
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    return user;
}