const router = require("express").Router();
const { Review } = require('../../models');

router.get('/:title', async (req, res) => {
  try {
    const reviewData = await Review.findAll({
      order: [['createdAt', 'DESC']]
    });

    const reviews = reviewData.map(review => review.get({ plain: true }));
    
    res.render('review', { reviews });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post('/:title', async (req, res) => {
  try {
    const { title, content, username, imgURL } = req.body;
    console.log(req.body)
    const reviewData = await Review.create({
      title,
      content,
      username,
      imgURL,
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;