import Users from "../models/Users";
import Jwt from "jsonwebtoken";

class TokenController {
   async store(req,res){
        const { email='', password=''} = req.body;
    
        if(!email || !password){
            return res.status(400).json({
                errors:['Credenciais invalida']
            });
        }

        const user = await Users.findOne({where:{email}});

        if(!user){
            return res.status(400).json({
                errors:['Usuário não existe']
            });
        }

        if(!(await user.passwordIsValid(password))){
            return res.status(400).json({
                errors:['Senha Invalida']
            })
        }

        const {id} = user;
        const token = Jwt.sign({id, email}, process.env.TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRATION
        });

        res.json({token});
   }
}

export default new TokenController();