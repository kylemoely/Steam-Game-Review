const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('results')
  console.log('hi')
});

module.exports = router;