import Users from "../models/Users";

class UserController {
    async store(req, res){
        try{
            const novoUser = await Users.create({
                'nome': "teste2",
                'email': "Teste2@teste.com.br",
                'password': '12345611',
            });
            res.json(novoUser);
        }catch(e){
            res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
        
    }
}

export default new UserController();