const router = require("express").Router();
const { Review } = require('../../models');
const { User } = require('../../models')

router.get('/:title', async (req, res) => {
  res.send('YURRRRR');
})

// router.post('/:title', async (req, res) => {
//   try {
//     const reviewData = await Review.findAll
//   }
// });

module.exports = router;