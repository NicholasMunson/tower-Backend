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
    create(body) {
        return database("wine")
            .select()
            .insert(body)
            .returning("*")
            .then(record => record[0])
    },
    update(id, wine) {
        return database("wine")
            .update(wine)
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