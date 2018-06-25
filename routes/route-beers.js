const express = require('express');
const router = express.Router();
const queries = require("../queries/beerQueries")


router.get("/", (request, response, next) => {
    queries.list().then(beer => {
        response.json({beer});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(beer => {
        beer
        ?response.json({beer}):response.status(404).json({message: 'Not found'}) 
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(beer => {
        response.status(201).json({beer: beer});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(beer => {
        response.json({beer: beer[0]});
    }).catch(next);
});

module.exports = router;