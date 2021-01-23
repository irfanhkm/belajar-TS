
import { Router } from 'express'
import { UserController } from "./user/UserController";
import { CovidController } from "./covid/CovidController";

const routes: Router = Router();
const userController = new UserController();
const covidController = new CovidController();

routes.get('/user', (req, res) => userController.index(req, res));
routes.get('/covid/indonesia', (req, res) => covidController.indonesia(req, res));
routes.get('/covid/list-provinsi', (req, res) => covidController.listProvinsi(req, res));
routes.get('/covid/provinsi/:kode_provinsi', (req, res) => covidController.covidProvinsi(req, res));

export { routes }