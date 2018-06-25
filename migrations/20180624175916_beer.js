exports.up = function (knex, Promise) {
    return knex
        .schema
        .createTable("beer", beer => {
            beer.increments()
            beer.string("brewery")
            beer.string("name")
            beer.string("style")
            beer.float("ABV")
            beer.integer("rating")
            beer.string("notes")
        })

};

exports.down = function (knex, Promise) {
    return knex
        .schema
        .dropTableIfExists("beer")

};