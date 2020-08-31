'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      password_hash: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterfac) => {
    await queryInterface.dropTable('users');
  }
};
