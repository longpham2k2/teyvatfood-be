"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("food", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      rarity: {
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        references: {
          model: {
            tableName: "foodtypes",
          },
          key: "id",
        },
        type: Sequelize.INTEGER,
      },
      effect: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      iconPath: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("food");
  },
};
