
import { Router } from 'express'
import { UserController } from "./user/UserController";
const routes: Router = Router();
const userController = new UserController();

routes.get('/user', (req, res) => userController.index(req, res));

export { routes }