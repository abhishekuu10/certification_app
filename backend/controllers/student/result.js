const axios = require("axios");
const InputDataDecoder = require("ethereum-input-data-decoder");

const getResult = async (req, res) => {
  const { hash } = req.body;
  // console.log("hash: ", hash);
  try {
    const data = await axios.get(
      ` https://api-rinkeby.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=YourApiKeyToken`
    );

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
    // console.log("result", data.data.result.input);
    const decoder = new InputDataDecoder(abi);
    var result = decoder.decodeData(data.data.result?.input);
    result = result.inputs;

    console.log(result[0]);

    res.status(200).json({
      status: true,
      student: {
        name: result[0],
        rollNo: result[1],
        result: result[2],
        sem1: result[3],
        sem2: result[4],
        gender: result[5],
        university: result[6],
      },
    });
  } catch (err) {
    throw err;
  }
};

module.exports = { getResult };
