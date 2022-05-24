import express from "express";
import { route } from "express/lib/application";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getController);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);

    return app.use("/", router);
}
module.exports = initWebRoutes;