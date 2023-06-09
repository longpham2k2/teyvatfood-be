"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      food.belongsTo(models["foodtype"], {
        foreignKey: "type",
      });
    }
  }
  food.init(
    {
      id: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      rarity: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 0,
          max: 5,
        },
      },
      type: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
        },
      },
      effect: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      iconPath: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "food",
      modelName: "food",
    }
  );
  return food;
};
