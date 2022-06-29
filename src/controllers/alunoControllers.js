import Aluno from "../models/Aluno";

class AlunoController {
    
    async index(req,res){
        const alunos = await Aluno.findAll();
        res.json(alunos);
    }

    async show(req,res){
        const idAluno = req.params.id;
        const alunos = await Aluno.findByPk(idAluno);
        if(alunos == null)
            return res.json();
        return res.json(alunos);
    }

    async store(req,res){
        try{
            const alunos = await Aluno.create(req.body);
            return res.json(alunos);
        }catch(e){
           return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    async update(req,res){

        try{

            const idAluno = req.params.id;

            if(!idAluno){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            }

            const alunos = await Aluno.findByPk(idAluno);
            if(!alunos){
                return res.status(400).json({errors:['Aluno não existe']});
            }

            const novoAluno = await alunos.update(req.body);
            return res.json(novoAluno);
        }catch(e){
            
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

    async delete(req,res){
        try{
            const idAluno = req.params.id;

            if(!idAluno){
                return res.status(400).json({
                    errors:['Id não informado'],
                });
            }

            const aluno = await Aluno.findByPk(idAluno);

            if(!aluno){
                return res.status(400).json({errors:['Aluno não existe']});
            }
            await aluno.destroy();
            return res.json('{}');
        }catch(e){
            return res.status(400).json({'erros':e.errors.map( err => err.message)});
        }
    }

}

export default new AlunoController();