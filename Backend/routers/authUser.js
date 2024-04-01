const {  registerNewUser, loginUser, checkToken, forgetController } = require('../controllers/Register');
const requireSignIn = require('../middlewares/authMiddleware');

const authRouter=require('express').Router();

authRouter.post("/register-user",registerNewUser)
          .post("/login-user",loginUser)
          .get("/check-token",requireSignIn,checkToken)
          .get("/user-auth",requireSignIn,(req,res)=>{
              res.status(200).send({ok:true});
          })
          .post("/forget-user",forgetController);

module.exports=authRouter;