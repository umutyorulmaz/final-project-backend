
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let connectionString = "mongodb+srv://root:7jVALsqhEk7AFP6K@cluster0.hunxfax.mongodb.net/test";;
mongoose.connect(connectionString);

//connection to mongoose
mongoose
 .connect(connectionString, { useNewUrlParser: true } )
 .then( () => { console.log("Mongoose connected successfully to Mongo DB"); },
   error => { console.log("Mongoose could not connected to database: " + error); }
 );

 const transactionSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    gasUsed: {
      type: String   
    },
    receiptHash: {
      type: String   
    }
}, { timestamps: true })

var Transaction = module.exports = mongoose.model('Transaction', transactionSchema);

/*
Transaction.insertMany([
      {
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92222',
        destination: '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC',
        amount: '250',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0x374c5caa53a1418113f9b96098ad631678b864f8'

      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92222',
        destination: '0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097',
        amount: '250',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0x374c5caa53a1418113f9b96098ad631678b864f8'        
      },{
        source: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92222',
        destination: '0xbDA5747bFD65F08deb54cb465eB87D40e51B197E',
        amount: '250',
        status: 'SUCCESS',
        gasUsed: '21000',
        receiptHash: '0x374c5caa53a1418113f9b96098ad631678b864f8'
      }
]).then(function(){
    console.log("Transaction data inserted")  // Success
}).catch(function(error){
    console.log(`Error loading Transaction data`)      // Failure
});


*/

//console.log(Transaction.find({}));

// Transaction.find({})
//    .then((data) => {
//        console.log("All tasks", data);
//     })
//     .catch((err) => {
//        console.log(err);
//  });
