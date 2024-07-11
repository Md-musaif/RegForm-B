const { signup } = require("../Controllers/Register");
const router = require("express").Router();

router.post("/signup", signup);

module.exports = router;
