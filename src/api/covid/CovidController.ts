import * as express from 'express'
import { CovidLibrary } from '../../library/CovidLibrary';
import { BaseController } from "../../infra/BaseController";

export class CovidController extends BaseController {
    protected _covidLibrary = new CovidLibrary;

    public async indonesia(req: express.Request, res: express.Response) {
        try {
          const apiData = await this._covidLibrary.getIndonesia();
          return this.ok<any>(res, apiData);
        } catch (err) {
          this.fail(res, 'An unexpected error occurred')
        }
    }

    /**
     * get list provinsi dari data covid provinsi
     * @param req 
     * @param res 
     */
    public async listProvinsi(req: express.Request, res: express.Response) {
        try {
          const apiData: any = await this._covidLibrary.getProvinsi();
          const provinsiMap = apiData.map((data: any) => ({kode: data.attributes.Kode_Provi, name: data.attributes.Provinsi}));
          return this.ok<any>(res, provinsiMap);
        } catch (err) {
          this.fail(res, 'An unexpected error occurred')
        }
    }

    /**
     * get data provinsi berdasrkan kode
     * @param req 
     * @param res 
     */
    public async covidProvinsi(req: express.Request, res: express.Response) {
        try {
          const kodeProv = req.params.kode_provinsi;
          const apiData = await this._covidLibrary.getProvinsi();
          const provinsiMap = apiData.find((data: any) => data.attributes.Kode_Provi === parseInt(kodeProv, 10));
          if (provinsiMap) {
            return this.ok<any>(res, provinsiMap);
          }
          return this.notFound(res, "Kode Provinsi tidak ditemukan");
        } catch (err) {
          this.fail(res, 'An unexpected error occurred')
        }
    }
}