const router = require("express").Router();
const { Review } = require('../../models');

// localhost:3021/reviews/:title
router.get('/:title', async (req, res) => {
  try {
    const gameID = req.params.title
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e2a9fb97bamshed18b6fd03679f7p164ac8jsn8814d63a32e0',
        'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'
      }
    };
    let url = `https://steam-game-search-and-details.p.rapidapi.com/game_details/search_like/game_id/?search_value=${gameID}`;

    const response = await fetch(url, options);
    const result = await response.json();
    const gameTitle = result[0].title;
    const title = gameTitle.replace(/™/g, '');

    const optionsTwo = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e2a9fb97bamshed18b6fd03679f7p164ac8jsn8814d63a32e0',
        'X-RapidAPI-Host': 'steam-game-search-and-details.p.rapidapi.com'
      }
    };
    let urlTwo = `https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/?search_value=${title}`;

    const responseTwo = await fetch(urlTwo, optionsTwo);
    const resultTwo = await responseTwo.json();
    const imgURL = resultTwo[0].image_thumbnail

    const reviewData = await Review.findAll({
      where: {id: gameID},
      order: [['createdAt', 'DESC']]
    });
    const reviews = reviewData.map(review => review.get({ plain: true }));

    res.render('review', { reviews, title, imgURL });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:title', async (req, res) => {
  try {
    const reviewData = await Review.create({
      gameID: req.params.title,
      title: req.body.title,
      content: req.body.content,
      imgURL: req.body.imgURL,
      username: req.body.username
    });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;