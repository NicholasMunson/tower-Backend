const CONFIG = require("./knexfile")[process.env.NODE_ENV || "development"]
console.log(CONFIG)
module.exports = require("knex")(CONFIG)