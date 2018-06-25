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
    create(resolution) {
        return database("beer")
            .select()
            .insert(resolution)
            .returning("*")
            .then(record => record[0])
    },
    update(id, resolution) {
        return database("beer")
            .update(resolution)
            .where("id", id)
            .returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("beer")
            .delete()
            .where("id", id)
    }
};
