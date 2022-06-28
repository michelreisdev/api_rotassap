import {DataTypes, Model} from "sequelize";
var bcrypt = require('bcryptjs');
export default class Users extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: DataTypes.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3,255],
                        msg:'Esse campo é obrigatório',
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
            password_hash: {
                type: DataTypes.STRING,
                defaultValue: '',
            },
            password: {
                type: DataTypes.VIRTUAL,
                defaultValue: '',
                validate:{
                    len:{
                        args: [6,50],
                        msg:'Senha precisa ter entre 6 e 50 caracteres',
                    },
                },
            },
        },{
            sequelize,
        });
        this.addHook('beforeSave', async (user) =>{
            if(user.password){
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
            
        });
        return this;
    }
}