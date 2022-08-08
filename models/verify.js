const session= require ("express-session");

const verifyLogIn = (req,res) =>
{
    res(req.session.logIn);
}

module.exports = {verifyLogIn};