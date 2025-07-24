
const mysql = require("mysql");
const { promisify } = require("util");
const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Tannu@2408#',
  database: 'rapiddb'
  });
dbconnection.query = promisify(dbconnection.query);
// Connect to the database
dbconnection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: ", err);
    return;
  }
  console.log("Connected to the database.");
});
// console.log(dbconnection);

module.exports = dbconnection;
