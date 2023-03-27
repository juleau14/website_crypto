const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/home.html"));
})

router.get("*", (req, res) => {
    res.redirect("/home");
})

router.post("*", (req, res) => {
    res.redirect("/home");
})


module.exports = router;