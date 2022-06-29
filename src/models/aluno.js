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
                validate:{
                    isInt:{
                        msg:'Altura precisa ser um número'
                    }
                }
            },
            peso: {
                type: DataTypes.FLOAT,
                defaultValue: '',
                validate:{
                    isFloat:{
                        msg:'Altura precisa ser um número'
                    }
                }
            },
            altura: {
                type: DataTypes.FLOAT,
                defaultValue: '',
                validate:{
                    isFloat:{
                        msg:'Altura precisa ser um número'
                    }
                }
            },
        },{
            sequelize
        });
        return this;
    }
}
