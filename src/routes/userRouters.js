import { Router } from "express";
import userControllers from "../controllers/userControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router;


/* router.get('/', userControllers.index); *///Remover
//router.get('/',loginRequired,userControllers.show);//Remover

router.post('/',userControllers.store);
router.put('/',loginRequired ,userControllers.update);
router.delete('/',loginRequired ,userControllers.delete);

export default router;