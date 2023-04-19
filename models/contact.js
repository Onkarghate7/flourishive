const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const Contact = sequelize.define('contacts', {
  // Model attributes are defined here
  permanent_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
curreent_address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

module.exports=Contact