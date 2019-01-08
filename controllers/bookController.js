const db = require("../models");

// Defining methods for the booksController
module.exports = {
    findAll: function(req, res) {
      db.Book
        .find({})
        .then(dbBooks => res.json(dbBooks))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
      db.Book
        .create(req.body)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.Book
        .findByIdAndDelete(req.params.id)
        .then(dbBook => res.json(dbBook))
        .catch(err => res.status(422).json(err));
    }
  };
  