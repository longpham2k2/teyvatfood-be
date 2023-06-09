"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class foodrecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  foodrecipe.init(
    {
      foodId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "foodrecipe",
    }
  );
  return foodrecipe;
};
