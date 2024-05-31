const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')
const security = require('../src/utils/security')
const UserRepository = require('../repository/UserRepository')
const validateRequest = require('../services/auth-middleware')

verifyToken = async (req, res, next) =>{
    let nonce = req.headers['authorization'];
    console.log(nonce)
    //next()
    //return
    if (nonce){
        nonce = nonce.replace("\"", "")
        nonce = nonce.replace("\"", "")
        let decodedNonce = await security.decodeToken(nonce)
        console.log(decodedNonce)
        if (decodedNonce && decodedNonce.email){
            let params = {}
            params.username = decodedNonce.email
            let user = await UserRepository.getUserByEmail(params)
            if (!user)
                res.sendStatus(403)
            else
                next()
        }
        else
            res.sendStatus(403)

    }
    else
        res.sendStatus(403)
}

function authentication(req,res,next){
    //console.log(req.headers.token);
    let decryptToken = security.Decrypt(req.headers.token)
    console.log(
        {
            Reqtoken : JSON.parse(decryptToken),
            ResTokenValues : security.validateToken2(JSON.parse(decryptToken))
        }
    )
    //console.log(JSON.parse(decryptToken));
    if(security.validateToken(JSON.parse(decryptToken))){
        console.log('Go next');
        next();
    }else{
        res.sendStatus(403)
    }
}


router.get('/healthcheck', (req, res) => {
    res.json({succeded: true, payload: 'HealthCheck ok'})
    console.log('HealthCheck ok')
})

router.post('/signin',authController.signIn)
router.post('/fakeToken',authController.fakeToken)

module.exports = router