const router = require('express').Router();
const homeRoutes = require('./homepageRoute');
const loginRoutes = require('./loginRoute');
const resultRoutes = require('./resultRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);

router.use('/login', loginRoutes);

router.use('/reviews', reviewRoutes);

router.use('/results', resultRoutes);

router.use('/users', userRoutes);

module.exports = router;