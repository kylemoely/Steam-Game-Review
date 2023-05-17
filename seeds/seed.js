const sequelize = require('../config/connection');
const { Review, User } = require('../models');

const reviewData = require('./reviewData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    await User.bulkCreate(userData);
    await Review.bulkCreate(reviewData);
    console.log('Seed data inserted successfully.');
  } catch (error) {
    console.error('Error inserting seed data:', error);
  }

  process.exit(0);
};

seedDatabase();

