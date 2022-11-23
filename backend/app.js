const events = require ('events');
const eventEmitter = new events.EventEmitter;
const mongoose = require('mongoose');
const Transaction = require('./seed');
var cors = require('cors');
const wallet = require ("./modules/accounts");
const { addrData } = require('./data');
const axios = require('axios').default;
const Schema = mongoose.Schema;
var express = require ('express');
var app = express ();
var historyRouter = require('./routes/history');
var accountsRouter = require('./routes/routesaccounts');
const wallet2 = require ("./modules/transactions");
var router = express.Router();


app.listen(3000);


app.get('/transaction/history', historyRouter);
app.get('/account/addresses',accountsRouter);
app.get('/account/balance',accountsRouter);


//wallet.getBalance();


mongoose.connect('mongodb+srv://root:7jVALsqhEk7AFP6K@cluster0.hunxfax.mongodb.net/test');


eventEmitter.on('ready', () => console.log("getBalance module called.."));


  


