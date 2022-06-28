import Users from "../models/Users";

class UserController {

    async store(req, res){
        try{
            const novoUser = await Users.create(req.body);
            return res.json(novoUser);
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    async index(req, res){
        try{
            const users = await Users.findAll();
            return res.json(users);
        }catch(e){
            return res.json(null);
        }
    }

    async show(req, res){
        try{
            const idUser = req.params;
            const user = await Users.findByPk(idUser.id);
            return res.json(user);
        }catch(e){
            return res.json(null);
        }
    }

    async update(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            }

            const user = await Users.findByPk(req.params.id);
              

            if(!user){
                return res.status(400).json({errors:['Usuário não existe']});
            }
            
            const novoUsuario = await user.update(req.body);
            return res.json(novoUsuario);
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    async delete(req, res){
        try{
            if(!req.params.id){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            }

            const user = await Users.findByPk(req.params.id);
              

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