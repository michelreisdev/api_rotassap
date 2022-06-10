module.exports = {
  async up(queryInterface, Sequelize) {


    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
       allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false
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


    return queryInterface.dropTable('alunos');

  }
};
