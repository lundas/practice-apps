const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `
      CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        s_id VARCHAR(40) NOT NULL,
        name TEXT,
        email TEXT,
        password TEXT,
        address_line1 TEXT,
        address_line2 TEXT DEFAULT NULL,
        city TEXT,
        state TEXT,
        zipcode TEXT,
        phone TEXT,
        ccn TEXT,
        exp_date TEXT,
        cvv TEXT,
        billing_zipcode TEXT,
        UNIQUE (s_id)
      )`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
