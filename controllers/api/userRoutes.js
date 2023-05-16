const router = require('express').Router();
const {User} = require("../../models");

router.get('/', (req, res) => {
    console.log('Welcome User');
res.render('users')
})

router.post('/', (req,res) => {
    console.log('Welcome User');

})

module.exports = router;