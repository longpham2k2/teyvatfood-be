'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("food", [
      {
        name: "Apple",
        rarity: 0,
        type: 1,
        effect: "Restores 300 HP.",
        description: "Crisp and fragrant. Delicious raw or made into wine.",
      },
      {
        name: "Sunsettia",
        rarity: 0,
        type: 1,
        effect: "Restores 300 HP.",
        description: "A plump fruit, beautiful like the sunset, that is abundant across all of Teyvat. It has a curious, sweet aroma and is able to energize an individual.",
      },
      {
        name: "Holy Water",
        rarity: 3,
        type: 2,
        effect: "Regenerates 1 HP/s for 20 seconds.",
        description: "A bottle of clear, colorless, and contaminant-free liquid. Indistinguishable from ordinary spring water. May or may not be worth putting all of one's hopes into.",
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
  }
};
