const router = require('express').Router();
const {Review} = require("../../models");
// localhost:3021/users/:username
router.get('/:username', async (req, res) => {
  try {
    const reviewData = await Review.findAll({where:{username:req.params.username}});
    // console.log(reviewData)
    const stringfyReviewData = reviewData.map((review) => review.get({plain: true}));
    console.log(stringfyReviewData)
    res.status(200).render("user", {stringfyReviewData})
  } catch (err) {
    res.status(500).json(err);
  }

})
// localhost:3021/users/:username
router.post('/:username', async (req,res) => {
    try {
        const {username} = req.params;
        const {title, content, imgURL} = req.body;
        const reviewData = await Review.create({
            title,
            content,
            username,
            imgURL,
        });

        res.status(200).json(reviewData);
    } catch(err) {
        res.status(500).json(err);
    }

    
})

module.exports = router;