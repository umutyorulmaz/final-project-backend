var express = require ('express');
var app = express ();
var historyRouter = require('./routes/history');
var accountsRouter = require('./routes/routesaccounts');
const wallet = require ("./modules/accounts");
const wallet2 = require ("./modules/transactions");
var router = express.Router();


 app.listen(3000);


app.get('/transaction/history', historyRouter);
app.get('/account/addresses',accountsRouter);
app.get('/account/balance',accountsRouter);
