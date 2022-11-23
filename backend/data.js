
const addrData = [
    { id: "0", address: "Oxf39Fd6e51aad88F6F4ce5aB8827279cffb922662" },
    { id: "1", address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" },
    { id: "2", address: "Ox3C44CdDdB6a900fa2b585dd299e03d12FA4293BC" },
    { id: "3", address: "Ox90F79bf6EB2c4f870365E785982E1f101E93b906" },
    { id: "4", address: "Ox15d34AAf54267DB7D7C367839AAF71A00a2C6A65" }
  ];
    
  const currentTransactions = [
      {
        hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
        status: "SUCCESS",
        timestamp: Date.now() - 10000,
        from: addrData[1],
        to: addrData[3],
        value: 250,
        currency: "ETH",
        gas_user: 21000
      },
      {
        hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
        status: "SUCCESS",
        timestamp: Date.now() - 30000,
        from: addrData[1],
        to: addrData[3],
        value: 250,
        currency: "ETH",
        gas_user: 25000
      },
      {
        hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
        status: "SUCCESS",
        timestamp: Date.now() - 50000,
        from: addrData[3],
        to: addrData[2],
        value: 250,
        currency: "ETH",
        gas_user: 30000
      },
      {
        hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
        status: "SUCCESS",
        timestamp: Date.now() - 100000,
        from: addrData[2],
        to: addrData[1],
        value: 250,
        currency: "ETH",
        gas_user: 30000
      },
      {
        hash: "0x39ae0a30kljaldkfa909012934j3i029iealjnfdkajnfdfadsf",
        status: "SUCCESS",
        timestamp: Date.now() - 200000,
        from: addrData[2],
        to: addrData[0],
        value: 250,
        currency: "ETH",
        gas_user: 30000
      }
    ]
  
  module.exports= {
      addrData,
      currentTransactions
    }