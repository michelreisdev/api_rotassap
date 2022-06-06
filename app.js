import express from "express";
import homeRouters from './src/routes/homeRoutes';


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
    }
}

export default new App().app;