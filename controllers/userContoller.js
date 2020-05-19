const db = require("../models");

module.exports = {
  create: function (req, res) {
    db.User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Unit.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};