const { Router } = require("express");
const route = Router();

const { addStudent } = require("../../controllers/student/add");
const { getResult } = require("../../controllers/student/result");

route.post("/add", addStudent);
route.post("/result", getResult);

module.exports = { route };
