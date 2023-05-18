const router = require('express').Router();
const homeRoutes = require('./homepageRoute');
const accountRoutes = require('./accountRoute');
const resultRoutes = require('./resultRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/', homeRoutes);

router.use('/account', accountRoutes);

// router.use('/reviews', reviewRoutes);

// router.use('/results', resultRoutes);

// router.use('/users', userRoutes);

module.exports = router;

