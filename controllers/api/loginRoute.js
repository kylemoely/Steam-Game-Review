const router = require("express").Router();
const { emitWarning } = require("process");
const {User} = require("../../models");

router.get("/login", (req, res) => {
    console.log("hELLO FROM THE USER LOGIN");




})

router.post("/login", async (req, res) => {
    const userData = await User.create(req.body);

    res.json("DONE")
})

module.exports = router;