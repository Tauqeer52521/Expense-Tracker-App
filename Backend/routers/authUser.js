const {  registerNewUser, loginUser, checkToken } = require('../controllers/Register');
const requireSignIn = require('../middlewares/authMiddleware');

const authRouter=require('express').Router();

authRouter.post("/register-user",registerNewUser)
          .post("/login-user",loginUser)
          .get("/check-token",requireSignIn,checkToken);

module.exports=authRouter;