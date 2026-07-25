'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Beer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client, {
        foreignKey: {
          name: 'clientId',
          allowNull: false,
          onDelete: 'CASCADE',
           onUpdate: 'CASCADE',
           hooks:true
        },
        as: 'player'
      });
    }
  }
  Beer.init({
    company: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.INTEGER,
    clientId: {
      field: "clientId",
      type: DataTypes.INTEGER,
      references: {
          model: "Client",
          key: "id",
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
  },
  }, {
    sequelize,
    modelName: 'Beer',
  });
  return Beer;

};