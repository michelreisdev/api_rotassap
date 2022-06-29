import { Router } from "express";

import fotoControllers from "../controllers/fotoControllers";

const router = new Router;

router.post('/', fotoControllers.store);

export default router;