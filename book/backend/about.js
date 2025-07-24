const express = require("express");
const app = express();
const router = express.Router();

router.get("/aboutus", (req, res) => {
  res.send("Good Evening");
});

module.exports = router;

