if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users");
const cors = require("cors");
// const mysql = require("mysql");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

// const connection =
//   process.env.NODE_ENV === "production"
//     ? mysql.createConnection(process.env.JAWSDB_URL)
//     : mysql.createConnection(configuration.development.connection);

// connection.connect((e) => {
//   e ? console.log(e.message) : console.log("Connected to MySQL");
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
