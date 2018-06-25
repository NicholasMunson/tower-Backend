const database = require("../database_connection");

module.exports = {
    list() {
        return database("beer").select()
    },
    read(id) {
        return database("beer")
            .select()
            .where("id", id)
            .first()
    },
    create(body) {
        return database("beer")
            .select()
            .insert(body)
            .returning("*")
            .then(record => record[0])
    },
    update(id, beer) {
        return database("beer")
            .update(beer)
            .where("id", id)
            .returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("beer")
            .where("id", id)
            .delete()
    }
};
