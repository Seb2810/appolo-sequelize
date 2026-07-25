'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Clients", [
      {
          
          name: 'Deep',
          firstname: 'Johnny',
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        
          name: 'Stallone',
          firstname: 'Sylverster',
          createdAt: new Date(),
          updatedAt: new Date(),
      }
  ] , {});

  await queryInterface.bulkInsert("Beers", [
      {
        
          company: 'Kronenbourg',
          color: 'blond', 
          price: 2,
          clientId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
       
        company: 'Kasteel',
        color: 'blond', 
        price: 1,
        clientId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
      }
  ] , {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('clients', null, {});
    await queryInterface.bulkDelete('beers', null, {});
  }
};
