const express = require('express');
const router = express.Router();
const queries = require("../queries/wineQueries")


router.get("/", (request, response, next) => {
    queries.list().then(wine => {
        response.json({wine});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(wine => {
        wine
        ?response.json({wine}):response.status(404).json({message: 'Not found'}) 
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(wine => {
        response.status(201).json({wine: wine});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(wine => {
        response.json({wine: wine[0]});
    }).catch(next);
});

module.exports = router;