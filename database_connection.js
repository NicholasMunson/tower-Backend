const CONFIG = require("./knexfile")[process.env.NODE_ENV || "development"];
console.log(CONFIG);

// Add connection error handling
const knex = require("knex")(CONFIG);

knex
  .raw("SELECT 1")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

module.exports = knex;
