import dotenv from 'dotenv';
dotenv.config();
import  './src/database';
import express from "express";
import homeRouters from './src/routes/homeRoutes';
import userRouter from './src/routes/userRouters';
import tokenRouter from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import fotoRouter from './src/routes/fotoRoutes';



class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extends: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRouters);
        this.app.use('/users/', userRouter);
        this.app.use('/tokens/', tokenRouter);
        this.app.use('/aluno/', alunoRouter);
        this.app.use('/foto/', fotoRouter);
    }
}

export default new App().app;