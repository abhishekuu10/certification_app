const { Router } = require("express");
const route = Router();
require("dotenv").config();
const { API_URL, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

route.post("/", async (req, res) => {
  const web3 = createAlchemyWeb3(API_URL);
  const address = "0x571b66B74864b21243fD24bF0B5dda259C83F367";
  const account = "0x809c92c89a7b71115ad6d3b739ac6bdee288a80f";

  console.log(req.body);

  const nonce = await web3.eth.getTransactionCount(account, "latest"); // nonce starts counting from 0
  const { name, rollNo, result, sem1, sem2, gender, university } = req.body;
  const abi = require("../../build/certificate.json").abi;
  const certi = new web3.eth.Contract(abi, address);

  const addStudent = await certi.methods
    .addStudent(name, rollNo, result, sem1, sem2, gender, university)
    .encodeABI();

  const transaction = {
    from: account,
    to: "0x571b66B74864b21243fD24bF0B5dda259C83F367", // faucet address to return eth
    // value: 100,
    gas: 5300000,
    // gasPrice: 1e6,
    maxPriorityFeePerGas: 1000000108,
    // nonce: nonce,
    // optional data field to send message or execute smart contract
    data: addStudent,
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    transaction,
    PRIVATE_KEY
  );
  var hashcode;
  await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction,
    function (error, hash) {
      hashcode = hash;
      if (!error) {
        console.log(
          "🎉 The hash of your transaction is: ",
          hash,
          "\n Check Alchemy's Mempool to view the status of your transaction!"
        );
      } else {
        console.log(
          "❗Something went wrong while submitting your transaction:",
          error
        );
      }
    }
  );

  res.json({
    status: true,
    msg: "student added",
    hash: hashcode,
  });
});

module.exports = { route };
