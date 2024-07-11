const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const Authroutes = require("./Routes/routes");

require("dotenv").config();
require("./Connections/db");
const PORT = process.env.PORT || 8000;
app.get("/ping", (req, res) => {
  res.send("Pong");
});
app.use(bodyParser.json());
app.use(cors()); // can add congiguration object to allow only particular ips to access
app.use("/auth", Authroutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
