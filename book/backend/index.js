const express = require("express");
const dbconnection = require("./db");
const app = express();
const port = 3050;

app.get("/", (req, res) => {
  res.send("Good Evening");
});
app.get("/aboutus", require("./about"));
app.get("/about/:id", async (req, res) => {
  //   console.log(dbconnection + "connnetction");
  try {
    // const [data] = await dbconnection.query("SELECT * from user");
    const [data] = await dbconnection.query(
      `SELECT * from user WHERE iduser = ${req.params.id}`
    );
    // const [data] = await dbconnection.query(
    // `INSERT into user (iduser , name ,email ) VALUES ( ${req.params.id} , 'ramu ', 'ramu@gmail.com ')`
    // );
    res.send("Hello Worldd good!" + req.params.id + JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
