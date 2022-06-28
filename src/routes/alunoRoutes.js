import { Router } from "express";
import alunoControllers from "../controllers/alunoControllers";
const router = new Router;

router.get('/',alunoControllers.index);

export default router;