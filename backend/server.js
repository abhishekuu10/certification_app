const express = require("express");
const { Router } = express;
const route = Router();
const app = express();
const http = require("http");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/api", require("./route/api").route);

const httpServer = http.createServer(app);
// eslint-disable-next-line no-console
httpServer.listen(8000, () => {
  console.debug(`The server is running on port 8000`);
});
