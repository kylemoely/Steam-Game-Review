const User = require('./User');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'username'
    
});

Review.belongsTo(User, {
    foreignKey: 'username'
});

module.exports = { User, Review };