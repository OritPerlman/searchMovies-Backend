var express= require ('express');
const jwt= require('jsonwebtoken');
var router = express.Router();
const userBL= require ('../models/usersBL');
const session= require ('express-session')

router.post('/login', function (req, res)
{
    const username= req.body.username;
    const password= req.body.password;
    if(validateDetails(username, password))
    {
        req.session.username = req.body.username;
            console.log(req.session.username);
    }
    let date = new Date(obj.dateLogin);
            if(date.getYear() == today.getYear() && date.getDay() == today.getDay())
            {

                if(Obj.num > obj.count)//If the number of operations has not yet ended
                {
                    res.render('menu',{});
                }
                else
                {
                    res.render('login', {errorMessage:"No further action can be taken today, please log in again tomorrow"});
                }
            }

            else
            {
                userBL.counterReset(req.body.username);
                req.session.admin = false;
                res.render('menu',{});
            }
        }
);


router.get('/login', function(req,res) 
{
    const RSA_PRIVATE_KEY ='someKey';
    var token = req.headers['x-access-token'];
    if(!token)
    {
        return res.status(401).send({auth:false, message: 'No token provided'})
    }
    jwt.verify(token,RSA_PRIVATE_KEY, function(err, data)
    {
        userid= data.userid;
        console.log(data)
        if(err)
        {
            return res.status(500).send({auth: false, message: 'Failed to authenticate token.'})
        }
        res.status(200).send(decoded);
    })
})


module.exports= router;