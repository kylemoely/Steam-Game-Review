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
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
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
            allowNull: false,
            defaultValue: '',
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