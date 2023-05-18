const router = require("express").Router();
const { Console } = require("console");
const {User} = require("../../models");


router.get(["/login" ,"/signup"], (req, res) => {
    if (req.session.logged_in) {
        return res.redirect(`/users/${req.session.username}`);
    }
    const path = req.path.split("/");

    let title;
    let title2;

    if (path[1]== "login"){
        return res.render("account", {
            title: "Login" ,
            title2: "Signup",
        });
    }

    else if(path[1]== "signup"){
        return res.render("account", {
            title: "Signup",
            title2: "Login",
        });
    }
});


async function validator (req,res) {
    const userData = await User.findOne({
        where: {
            username:req.body.username
        },
    });
    return userData;

    
}

function createSession (req, res,userData) {
    req.session.save(() => {
        req.session.username = userData.username;
        req.session.logged_in = true;
        return res.status(200).redirect(`/users/${username}`);
    });
}

router.post('/signup',async  (req, res) => {
    try {
        console.log("im in the log out post");
        console.log("inside the sign up post");
          const { username, password } = req.body;
      
          const validateUser = await validator(req,res);
          if (validateUser){
            return res.status(400).redirect("/account/login");
            
          }
          const userData = await User.create({
              username: username, 
              password: password,
          });

          return createSession(req, res,userData);
        
        }
       catch (err) {
        res.status(400).json(err);
      }
      });


router.post("/login", async (req, res) => {
    
    try { 
        if (req.session.logged_in) {
            return res.status(200).res.json({message: "authentification good"});
        }

        const userData = await validator(req,res);
        if (userData === undefined || userData === null) {   
            return res.status(401).json({error: "authentifiation"});
            
        }
        
        const validPassword = await userData.checkPassword(req.body.password);
        if(validPassword === undefined || validPassword === null || validPassword === false ) {
            return res.status(401).json({error: "authentifiation"});
        }

        return createSession(req, res,userData);
    }
    catch (error) {
        return res.status(401);
    }
});


module.exports = router;