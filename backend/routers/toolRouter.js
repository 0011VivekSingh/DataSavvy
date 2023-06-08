const { Router } = require('express');
const router = Router();

const Model = require('../models/toolModel');

router.post('/add', (req, res) => {
  //get data from client
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get('/getall', (req, res) => {
  Model.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get('/getbyuser/:id', (req, res) => {
  Model.find({ user: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.delete('/delete/:id', (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
