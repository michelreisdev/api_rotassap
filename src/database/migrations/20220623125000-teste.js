module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('teste', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }),
  down: (queryInterface) => { queryInterface.dropTable('teste') },
}
