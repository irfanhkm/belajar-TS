import express from "express";

const app = express();
const bodyParser = require('body-parser');
const port = 8080 || process.env.PORT;
const APIRoutes = require("./api/routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/', APIRoutes);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
