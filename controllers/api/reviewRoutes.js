const router = require("express").Router();
const { Review } = require('../../models/Review');

router.get('/:title', (req, res) => {
  res.send('YURRRRR');
})

module.exports = router;