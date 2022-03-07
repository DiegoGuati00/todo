const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const toDo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        autoIncrement: false,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'active'
    }
});
module.exports = { toDo };