const axios = require("axios");
const router = require("express").Router();

router.get("/", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
        .then(results => {
            const books = results.data.items;
            res.json(books);
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;