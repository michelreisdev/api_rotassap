import Aluno from "../models/aluno";

class HomeController {
    async index(req,res){
        const novoAluno = await Aluno.create({
            nome: "Maria",
            sobrenome: "Miranda",
            email: "email@gamilo.com.br",
            idade: 22,
            peso: 50,
            altura: 1.70
        });
        res.json(novoAluno);
    }
}

export default new HomeController();