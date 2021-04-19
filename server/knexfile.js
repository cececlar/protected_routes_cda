module.exports = {
  client: "mysql",
  connection: {
    host: process.env.JAWSDB_URL,
    user: "root",
    password: "rootroot",
    database: "todoheroku",
    charset: "utf8",
  },
};
