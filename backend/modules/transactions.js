const Transaction= require ('../seed');

const getTransactionHistory=async ()=> {
    
    const bdata =Transaction.find({})
    .then((data) => {
        console.log("All tasks", data);
        
     })
     .catch((err) => {
        console.log(err);
  });
  return bdata;
};

module.exports =  {
    getTransactionHistory
}