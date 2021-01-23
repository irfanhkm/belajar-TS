import * as express from 'express'
import { BaseController } from "../../infra/BaseController";

export class UserController extends BaseController {
    public async index (req: express.Request, res: express.Response) {
        try {
          console.log(`request id = ${req.query.id}`);
          return this.ok<any>(res, "irfan");
        } catch (err) {
          this.fail(res, 'An unexpected error occurred')
        }
    }
}