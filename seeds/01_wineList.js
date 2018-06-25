exports.seed = function (knex, Promise) {
    return knex
        .raw("TRUNCATE TABLE wine RESTART IDENTITY CASCADE")
        .then(function () {
            return knex('wine').insert([
                {
                    winery: "Chateau La Paws",
                    style: "Pinot Noir",
                    region: "California",
                    ABV: "13",
                    rating: "4",
                    notes: "Smooth and balanced. They donate a percentage of their profits to no kill shel" +
                            "ters to help dogs in need.  "
                }, {
                    winery: "Layer Cake",
                    style: "Pinot Noir",
                    region: "California",
                    ABV: "13.9",
                    rating: "4",
                    notes: "More on the sweet side"
                }, {
                    winery: "Kingston Family Vineyards",
                    style: "Sauvignon Blanc",
                    region: "Chile",
                    ABV: "13.5",
                    rating: "3",
                    notes: "A really complex nose with the whole spectrum of ripe sauvignon aromas (citrus" +
                            ", melon, passion fruit)"
                }
            ]);
        });
};
