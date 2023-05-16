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

router.post('/:title', async (req, res) => {
  try {
    const { title } = req.params;
    const { content, username, imgUrl } = req.body;

    const reviewData = await Review.create({
      title,
      content,
      username,
      imgUrl,
    });

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;