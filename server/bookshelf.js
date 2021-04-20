const knex =
  process.env.NODE_ENV === "production"
    ? require("knex")(require("./knexfile").configuration.production)
    : require("knex")(require("./knexfile").configuration.development);
const bookshelf = require("bookshelf")(knex);

module.exports = bookshelf;
