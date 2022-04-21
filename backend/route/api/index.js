const { Router } = require("express");

const route = Router();

route.use("/add", require("./add3").route);
route.use("/result", require("./result").route);

module.exports = { route };
