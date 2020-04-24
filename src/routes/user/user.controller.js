const User = require('../../models').user;

module.exports = {
  getAll: (req, res) => {
    User
      .findAll()
      .then(users => res.send(users))
      .catch(err => res.status(500).send(err));
  },
  create: (req, res) => {
    User
      .create(req.body)
      .then(user => res.send(user))
      .catch(err => res.send(500, err));
  }
}