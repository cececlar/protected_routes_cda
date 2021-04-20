const knex =
  process.env.NODE_ENV === "production"
    ? require("knex")(require("./knexfile").production)
    : require("knex")(require("./knexfile").development);
const bookshelf = require("bookshelf")(knex);

console.log(require("./knexfile").development);

module.exports = bookshelf;
