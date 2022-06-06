class HomeComtroller{
    index(req,res){
        res.status(200).json({tudoCerto:true});
    }
}

export default new HomeComtroller();