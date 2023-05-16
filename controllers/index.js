const router = require("express").Router();

const api = require("./api");
const { route } = require("./api/userRoute.js");

router.use("/", api);


module.exports = router;