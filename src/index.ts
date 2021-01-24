import express from "express";
import bodyParser from "body-parser";
import { routes } from "./routes";

const app = express();
const port = 8080 || process.env.PORT;

function loggerMiddleware(request: express.Request, response: express.Response, next = function() {}) {
  console.log(`${request.method} ${request.path}`);
  next();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(loggerMiddleware);
app.use('/', routes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
