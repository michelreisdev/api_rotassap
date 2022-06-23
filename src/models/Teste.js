import Sequelize, {Model} from "sequelize";

export default  class Teste extends Model{
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
        },{
            sequelize
        });
        return this;
    }
}