exports.up = function (knex, Promise) {
    return knex
        .schema
        .createTable("wine", (wine) => {
            wine.increments()
            wine.string("winery")
            wine.string("style")
            wine.string("region")
            wine.float("ABV")
            wine.integer("rating")
            wine.string("notes")
        })

};

exports.down = function (knex, Promise) {
    return knex
        .schema
        .dropTableIfExists("wine")

};