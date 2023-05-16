const router = require('express').Router();
const {User} = require("../../models");
// localhost:3021/users
router.get('/', (req, res) => {
    console.log('Welcome User');
res.json('From userRoutes.js');
})

router.post('/post-review', async (req,res) => {
    //async and await in case its not instant
// res.json('oh boy')
//object destructuring
// username below aliased to UserInputUsername; use colon, like variable declaration
    const { username:UserInputUsername, password:UserInputPassword } = req.body;
    const userData = await User.create({
        username: UserInputUsername, 
        password: UserInputPassword
    });

    res.json(userData);
})

module.exports = router;