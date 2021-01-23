import * as express from 'express'
import { CovidLibrary } from '../../library/CovidLibrary';
import { BaseController } from "../../infra/BaseController";

export class CovidController extends BaseController {
    protected _covidLibrary = new CovidLibrary;

    public async indonesia (req: express.Request, res: express.Response) {
        try {
          const apiData = await this._covidLibrary.getIndonesia();
          return this.ok<any>(res, apiData);
        } catch (err) {
          this.fail(res, 'An unexpected error occurred')
        }
    }
}