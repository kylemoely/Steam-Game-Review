const router = require('express').Router();
const {User} = require("../../models");

router.get('/:user', (req, res) => {
    console.log('Welcome User');

})

router.post('/:user', (req,res) => {
    console.log('Welcome User');

})

module.exports = router;