const express = require("express");
const { Router } = express;
const route = Router();
const app = express();
const http = require("http");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors({ origin: "*" }));

// app.use((req, res, next) => {
//   // set the CORS policy
//   res.header("Access-Control-Allow-Origin", "*");
//   // set the CORS headers
//   res.header(
//     "Access-Control-Allow-Headers",
//     "origin, X-Requested-With,Content-Type,Accept, Authorization"
//   );
//   // set the CORS method headers
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST");
//     return res.status(200).json({});
//   }
//   next();
// });

app.use("/api", require("./route/api").route);

const httpServer = http.createServer(app);
// eslint-disable-next-line no-console
httpServer.listen(8846, () => {
  console.debug(`The server is running on port 8846`);
});
