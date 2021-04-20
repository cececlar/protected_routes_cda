if (process.env.NODE_ENV !== "production") require("dotenv").config();
console.log(process.env.DB_NAME);

module.exports = {
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
