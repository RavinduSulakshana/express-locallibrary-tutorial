const express = require("express");
const router = express.Router();

//Home page router
router.get("/", function (req, res) {
  res.send("wiki Home page");
});

//About page route
router.get("/about", function (req, res) {
  res.send("about this wiki");
});
module.exports = router;
