const express = require("express");
const bodyParser = require("body-parser");
const visitors = require("./app/controllers/visitors.controller.js");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to website visitor application." });
});

require("./app/routes/visitors.routes.js")(app);

/* To send data from redis to mysql */
function sendToDb() {
   visitors.offLoadData();
}
setInterval(sendToDb, 2000);

/* To send data from redis to mysql */


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
