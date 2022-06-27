import { Router } from "express";
import userControllers from "../controllers/userControllers";
const router = new Router;

router.post('/',userControllers.store);

export default router;