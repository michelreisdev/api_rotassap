import Aluno from "../models/Aluno";

class HomeController {
    async index(req,res){
      
        const appointments = await Aluno.create({
            "nome": "teste",
            "email": "teste@teste.com",
            "idade": 23,
            "peso": 69,
            "altura": 180
        });
            res.json(appointments);

    }
}

export default new HomeController();