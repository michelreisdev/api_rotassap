import { Router } from "express";
import userControllers from "../controllers/userControllers";
import loginRequired from "../middlewares/loginRequired";

const router = new Router;

router.post('/',userControllers.store);
router.get('/',loginRequired, userControllers.index);
router.get('/:id',userControllers.show);
router.post('/:id',userControllers.update);
router.delete('/:id',userControllers.delete);

export default router;