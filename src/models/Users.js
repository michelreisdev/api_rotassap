import {Sequelize, Model} from "sequelize";
import { decodeBase64 } from "bcryptjs";
export default class Users extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3,255],
                        msg:'Esse campo é obrigatório',
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    isEmail:{
                        msg:'E-mail invalido',
                    }
                }
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate:{
                    len:{
                        args: [6,50],
                        msg:'Senha precisa ter entre 6 e 50 caracteres',
                    }
                }
            },
        },{
            sequelize,
            modelName: 'Users' 
        });
        this.addHook('beforeSave', async (user) =>{
            user.password_hash = await decodeBase64.hash(user.password, 8);
        });
        return this;
    }
}