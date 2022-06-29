import { Router } from "express";
import alunoControllers from "../controllers/alunoControllers";
const router = new Router;

router.get('/',alunoControllers.index);
router.get('/:id',alunoControllers.show);
router.post('/',alunoControllers.store);
router.put('/:id',alunoControllers.update);
router.delete('/:id',alunoControllers.delete);

export default router;