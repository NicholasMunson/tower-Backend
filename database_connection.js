const CONFIG = require("./knexfile")[process.env.NODE.ENV || "development"]
module.exports = require("knex")(CONFIG)