const router = require("express").Router();
const Review = require('../../models/Review');

router.get('/', async (req, res) => {
    try{
        const reviewData = await Review.findAll(
            {
                limit: 3,
                order: [['createdAt', 'DESC']]
            }
        );
        const reviews = [];
        for(let x=0;x<reviewData.length; x++){
            reviews.push(reviewData[x].get({plain: true}));
        }
        res.render('home', {reviews, loggedIn: req.session.logged_in, username: req.session.username});
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;

