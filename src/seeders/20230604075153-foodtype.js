"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("foodtypes", [
      {
        name: "Recovery Dishes (Healing)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Recovery Dishes (Regeneration)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Recovery Dishes (Revive)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adventurer's Dishes (Stamina Increase)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adventurer's Dishes (Stamina Reduction)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adventurer's Dishes (Sheer Cold Resistance)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ATK-Boosting Dishes (ATK Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ATK-Boosting Dishes (CRIT Rate Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "DEF-Boosting Dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Pyro RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Hydro RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Geo RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Electro RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Dendro RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Cryo RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Potions (Anemo RES Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Pyro DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Hydro DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Geo DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Electro DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Dendro DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Cryo DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Essential Oils (Anemo DMG Up)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
