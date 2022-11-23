var express = require('express');
var router = express.Router();
const wallet = require ("../modules/accounts");


let a = wallet.getAddress();
let b = wallet.getBalance();
router.get('/account/addresses', function(req, res, next) { 
    res.send(a);
});
router.get('/account/balance', function(req, res, next) {
    res.send(b);
 }); 



module.exports = router;

