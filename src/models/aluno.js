import {Model, DataTypes } from "sequelize";
export default  class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3,255],
                        msg:'campo nome é obrigatório',
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                defaultValue: '',
                unique:{
                    msg:"Email já existe",
                },
                validate:{
                    isEmail:{
                        msg:'E-mail invalido',
                    }
                }
            },
            idade: {
                type: DataTypes.INTEGER,
                defaultValue: '',
            },
            peso: {
                type: DataTypes.FLOAT,
                defaultValue: '',
            },
            altura: {
                type: DataTypes.FLOAT,
                defaultValue: '',
            },
        },{
            sequelize
        });
        return this;
    }
}
