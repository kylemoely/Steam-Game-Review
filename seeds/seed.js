const sequelize = require('../config/connection');
const { Review, User } = require('../models'); // Include the User model

const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(reviewData.map(review => ({ username: review.username })));

  await Review.bulkCreate(reviewData, {
    include: [User],
  });
  process.exit(0);
};

seedDatabase();

