const router = require("express").Router();
const passport = require("passport");
const { renderRegisterControllers, renderLoginControllers, logoutControllers,resetPaaword,cambioContraseña,resetPaawordRender,resetPaawordFormRender, cambiarRole,buscarUserIdController} = require('../controllers/auth.controllers')
router.get("/cambiar-password",resetPaawordFormRender)
router.get("/password-reset",resetPaawordRender)
router.post('/enviar-correo-cambio-contrasena',resetPaaword);

router.post('/cambiar-contrasena', cambioContraseña);


router.get("/register", renderRegisterControllers);
router.get('/login', renderLoginControllers);
router.get("/logout", logoutControllers);
router.post("/register/crear", passport.authenticate("local-register", {
    failureRedirect: "/auth/register",
    successRedirect: "/auth/login",
    passReqToCallback: true 
}));
router.post("/login/crear", passport.authenticate("local-login", {
    failureRedirect: "/auth/login",
    successRedirect: "/perfil",
    passReqToCallback: true
}))
router.get("/github", passport.authenticate("github", {
    scope: ["user:email"],
    session: false
}))
router.get('/github/callback', passport.authenticate('github', {
    successRedirect: "/perfil",
    failureRedirect: '/'
}));
router.get('/user', (req,res)=>{
    res.json(req.user);
})

router.get("/premium/:id", cambiarRole)
router.get("/buscarId",buscarUserIdController)

module.exports = router