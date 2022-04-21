const exp = require("express");
const { Router } = exp;
const route = Router();
const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

app.use("/api", require("./route/api").route);

app.listen("8745", () => {
  console.log("server running on port 8745");
});
