module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('fotos', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    originalname:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename:{
      type: Sequelize.STRING,
      allowNull: false,
    },
    aluno_id:{
      type: Sequelize.INTEGER,
      allowNull: true,
      references:{
        model: 'alunos',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    }
  }),
  down: (queryInterface) => { queryInterface.dropTable('fotos') },
}
