import * as express from 'express'

export abstract class BaseController {
  public static jsonResponse (
    res: express.Response, code: number, message: string, success: boolean = false
  ) {
    return res.status(code).json({ message, success })
  }

  public ok<T> (res: express.Response, dto?: T, message = "Response success") {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json({
        message,
        data: dto,
        sucess: true,
      });
    } else {
      return res.sendStatus(200);
    }
  }

  public created (res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 400, message ? message : 'Unauthorized', false);
  }

  public unauthorized (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 401, message ? message : 'Unauthorized', false);
  }

  public paymentRequired (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 402, message ? message : 'Payment required', false);
  }

  public forbidden (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 403, message ? message : 'Forbidden', false);
  }

  public notFound (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 404, message ? message : 'Not found', false);
  }

  public conflict (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 409, message ? message : 'Conflict', false);
  }

  public tooMany (res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 429, message ? message : 'Too many requests', false);
  }

  public todo (res: express.Response) {
    return BaseController.jsonResponse(res, 400, 'TODO', false);
  }

  public fail (res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error.toString()
    })
  }
}