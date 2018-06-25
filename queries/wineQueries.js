const database = require("../database_connection");

module.exports = {
    list() {
        return database("wine").select()
    },
    read(id) {
        return database("wine")
            .select()
            .where("id", id)
            .first()
    },
    create(resolution) {
        return database("wine")
            .select()
            .insert(resolution)
            .returning("*")
            .then(record => record[0])
    },
    update(id, resolution) {
        return database("wine")
            .update(resolution)
            .where("id", id)
            .returning("*")
            .then(record => record[0])
    },
    delete(id) {
        return database("wine")
            .delete()
            .where("id", id)
    }
};