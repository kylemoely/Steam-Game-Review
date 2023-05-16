const router = require("express").Router();
const users = require("./api/userRoute.js");
const { route } = require("./api/userRoute.js");

router.use("/", users);


module.exports = router;