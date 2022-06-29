import Sequelize from "sequelize";
import databaseConfig from '../config/database';
import Aluno from "../models/Aluno";
import Users from "../models/Users";
import Foto from "../models/Foto";
const models = [Aluno,Users,Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model)=> model.init(connection));
models.forEach((model)=> model.associate && model.associate(connection.models) );