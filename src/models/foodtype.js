"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class foodtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      foodtype.hasMany(models["food"], {
        foreignKey: "type",
      });
    }
  }
  foodtype.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      iconPath: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "foodtypes",
      modelName: "foodtype",
    }
  );
  return foodtype;
};
