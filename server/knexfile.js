if (process.env.NODE_ENV !== "production") require("dotenv").config();
const mysql = require("mysql");

exports.configuration = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.JAWSDB_URL,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      charset: "utf8",
      insecureAuth: true,
    },
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
  },
};

const connection =
  process.env.NODE_ENV === "production"
    ? mysql.createConnection(process.env.JAWSDB_URL)
    : mysql.createConnection(this.configuration.development.connection);

connection.connect((e) => {
  e ? console.log(e.message) : console.log("Connected to MySQL");
});
