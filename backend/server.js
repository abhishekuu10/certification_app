const exp = require("express");
const { Router } = exp;
const route = Router();
const app = exp();
const http = require("http");
const cors = require("cors");

app.use(exp.json());

app.use(cors({ origin: "*" }));

app.use("/api", require("./route/api").route);

const httpServer = http.createServer(app);
// eslint-disable-next-line no-console
httpServer.listen(8845, () => {
  console.debug(`The server is running on port 8845`);
});
