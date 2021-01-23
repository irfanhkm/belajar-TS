
import { Router } from 'express'
import { UserController } from "./user/UserController";
import { CovidController } from "./covid/CovidController";

const routes: Router = Router();
const userController = new UserController();
const covidController = new CovidController();

routes.get('/user', (req, res) => userController.index(req, res));
routes.get('/covid/indonesia', (req, res) => covidController.indonesia(req, res));

export { routes }