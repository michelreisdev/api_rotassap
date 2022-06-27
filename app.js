import dotenv from 'dotenv';
dotenv.config();
import  './src/database';
import express from "express";
import homeRouters from './src/routes/homeRoutes';
import userRouter from './src/routes/userRouters';



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
    }
}

export default new App().app;