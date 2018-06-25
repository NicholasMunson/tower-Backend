exports.seed = function (knex, Promise) {
    return knex
        .raw("TRUNCATE TABLE beer RESTART IDENTITY CASCADE")
        .then(function () {
            return knex('beer').insert([
                {
                    brewery: "Avery",
                    name: "Old Jubilation",
                    style: "English Strong Ale",
                    ABV: "8.3",
                    rating: "5",
                    notes: "limited release"
                }, {
                    brewery: "Crooked Stave",
                    name: "St.Bretta",
                    style: "Citrus Saison",
                    ABV: "5.2",
                    rating: "3",
                    notes: "Very citrusy, good summer beer."
                }, {
                    brewery: "La Cumbre",
                    name: "Malpais",
                    style: "Stout",
                    ABV: "7.5",
                    rating: "3",
                    notes: "Heavy burnt flavor"

                }
            ]);
        });
};
