module.exports = {
  async up(queryInterface, Sequelize) {


    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  async down(queryInterface) {


    return queryInterface.dropTable('users');

  }
};
