const { Router } = require("express");
const route = Router();
const axios = require("axios");
const InputDataDecoder = require("ethereum-input-data-decoder");

route.get("/", async (req, res) => {
  const hash = req.body;
  const data = await axios.get(` https://api-rinkeby.etherscan.io/api
   ?module=proxy
   &action=eth_getTransactionByHash
   &txhash=hash
   &apikey=KOrVTfsFkAOcMY-4VnEqVjgYFMGga9pN `);

  const abi = [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "__name",
          type: "string",
        },
        {
          internalType: "string",
          name: "__rollNo",
          type: "string",
        },
        {
          internalType: "string",
          name: "__result",
          type: "string",
        },
        {
          internalType: "string",
          name: "__sem1",
          type: "string",
        },
        {
          internalType: "string",
          name: "__sem2",
          type: "string",
        },
        {
          internalType: "string",
          name: "__gender",
          type: "string",
        },
        {
          internalType: "string",
          name: "__university",
          type: "string",
        },
      ],
      name: "addStudent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "database",
      outputs: [
        {
          internalType: "uint256",
          name: "rollNo",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sem1",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sem2",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "result",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "university",
          type: "string",
        },
        {
          internalType: "string",
          name: "gender",
          type: "string",
        },
        {
          internalType: "bool",
          name: "exist",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const decoder = new InputDataDecoder(abi);
  const result = decoder.decodeData(data.input);

  res.json({
    status: true,
    result,
  });
});

module.exports = { route };
