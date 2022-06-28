import Users from "../models/Users";

class UserController {

    //Criar
    async store(req, res){
        try{
            const novoUser = await Users.create(req.body);
            const {id, nome, email} = novoUser;
            return res.json({id, nome, email});
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    //Buscar Todos
    async index(req, res){
        try{
            const users = await Users.findAll({attributes:['id','nome','email']});
            return res.json(users);
        }catch(e){
            return res.json(null);
        }
    }

    //Buscar por id
    async show(req, res){
        try{
            const user = await Users.findByPk(req.userId);
            const {id, nome, email} = user;
            return res.json({id, nome, email});
        }catch(e){
            return res.json(null);
        }
    }

    //Atualizar
    async update(req, res){
        try{
            /* if(!req.params.id){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            } */

            const user = await Users.findByPk(req.userId);
            
            if(!user){
                return res.status(400).json({errors:['Usuário não existe']});
            }
            
            const novoUsuario = await user.update(req.body);
            const { id, nome, email} = novoUsuario;
            return res.json({id, nome, email});
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    //Deletar
    async delete(req, res){
        try{
           /*  if(!req.params.id){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            } */

            const user = await Users.findByPk(req.userId);
              

            if(!user){
                return res.status(400).json({errors:['Usuário não existe']});
            }
            
            await user.destroy();
            return res.json(null);
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }
}

export default new UserController();