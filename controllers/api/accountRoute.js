const router = require("express").Router();
const { Console } = require("console");
const {User} = require("../../models");



router.get(["/login" ,"/signup"], (req, res) => {

    console.log("in the get login");
    if (req.session.logged_in) {
        return res.redirect("/");
    }
   
    const path = req.path.split("/");
    console.log(path);

    let title;
    let title2;

    if (path[1]== "login"){
        return res.render("account", {
            title: "Login" ,
            title2: "Signup",
            logged_in: true,
        });
    }

    else if(path[1]== "signup"){
        return res.render("account", {
            title: "Signup",
            title2: "Login"
        });
    }
});


async function validator (req,res) {
    // i want to return boolean true false if the username exists in the database
    const userData = await User.findOne({
        where: {
            username:req.body.username
        },
    });
    console.log(userData)

    return userData;
}

function createSession (req, res,userData) {
    req.session.save(() => {
        req.session.username = userData.username;
        req.session.logged_in = true;
        return res.status(200).redirect('/');
    });
}

router.post('/signup',async  (req, res) => {
    try {
        console.log("inside the sign up post");
          const { username, password } = req.body;
      
          const validateUser = await validator(req,res);
          console.log(validateUser);
          if (validateUser){
            res.redirect("/account/login");
            return;
          }
          const userData = await User.create({
              username: username, 
              password: password,
          });
          onsole.log("finished assign")
          return createSession(req, res,userData);
      
         
          
        
        }
       catch (err) {
        res.status(400).json(err);
      }
      });


router.post("/login", async (req, res) => {
    
    try { 
        if (req.session.logged_in) {
            return res.redirect("/");
        }

        const userData = await validator(req,res);
        if (!userData) {
            return res.status(404).redirect("/account/signup");
            
        }

    // console.log("IN THE LOGIN POST 2");
        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);
        console.log("validPassword");
        if(!validPassword) {
            return;
        }

        console.log("in the return post 3");
        return createSession(req, res,userData);
        console.log("in the login post 4");
    }
    catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
});

// router.post("/logout", (req,res) => {
//     console.log("logout");
//     try {
//     if (req.session.logged_in) {
//         req.session.destroy(() => {
//             req.status(204).end();
//         });
//     }
//     }
//     catch(error) {
//         console.log(error);
//         return;
//     }
// });


module.exports = router;