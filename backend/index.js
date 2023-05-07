const express = require("express");
const app = express();

require("./Database/databaseConnect");
app.use(express.json());
require("./Model/testScheema");

app.use(require("./Router/router"));

app.listen(5000, () => {
  "connected sucessfully";
});

