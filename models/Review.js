const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        gameID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'username'
            }
        },
        imgURL: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'review'
    }
);

module.exports = Review;