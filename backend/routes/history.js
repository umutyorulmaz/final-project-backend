var express = require('express');
var router = express.Router();
const wallet = require ("../modules/accounts");
const wallet2 = require ("../modules/transactions");
let c= wallet2.getTransactionHistory();

router.get('/transaction/history', function(req, res, next) {
    res.send(c);
 });

module.exports = router;