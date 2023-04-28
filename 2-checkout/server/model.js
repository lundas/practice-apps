const db = require("./db");
const mysql2 = require("mysql2");

module.exports = {
  create: function (table, data) {
    return db.connectAsync()
      .then(() => db.queryAsync(
        `INSERT INTO ${table} (${Object.keys(data).join()})
          VALUES (${'?'.repeat(Object.keys(data).length).split('').join()})`,
        [...Object.values(data)]
      ))
  }
}