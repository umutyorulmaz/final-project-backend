const {addrData} = require( "../data") ;
const events = require('events');
const eventEmitter = new events.EventEmitter;

const getAddress=()=> {
    
    console.log(addrData);
    return addrData; 
};

const getBalance=(address)=> {
    
    eventEmitter.emit('ready');//not working I dont know why
    address = "Address: 0xf2f5c73fa04406b1995e397b55c24ab1f3ea726c" +'\n' + "Balance: 999.99345299 ETH";
    console.log(address);
    
    return address;
};

module.exports = { 
    getAddress, 
    getBalance
}
