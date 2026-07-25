'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clients',
          key: 'id',
        },
         onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
      },
    });

   /* await queryInterface.addColumn(
      'Beers', // name of Source model
      'clientId', // name of the key we're adding 
      { 
        type: Sequelize.INTEGER ,
        references: {
          model: 'Clients', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    )*/
  },


  
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Beers');
  }
};