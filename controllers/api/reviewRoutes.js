const router = require("express").Router();
const { Review, User } = require('../../models');

router.get('/:title', async (req, res) => {
  try {
    const reviewData = await Review.findAll();

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;