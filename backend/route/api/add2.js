const { Router } = require("express");
const route = Router();
const Web3 = require("web3");
const MetaMaskConnector = require("node-metamask");

route.post("/", async (req, res) => {
  console.log("inside");
  const connector = new MetaMaskConnector({
    port: 8745, // this is the default port
    onConnect() {
      console.log("MetaMask client connected");
    }, // Function to run when MetaMask is connected (optional)
  });

  connector.start().then(async () => {
    console.log(" inside connector");
    // Now go to http://localhost:3333 in your MetaMask enabled web browser.
    const web3 = new Web3(connector.getProvider());
    // Use web3 as you would normally do. Sign transactions in the browser.

    const { name, rollNo, result, sem1, sem2, gender, university } = req.body;
    //   const ethNetwork =
    //     "https://rinkeby.infura.io/v3/2de1de6795684ceca9f8e22c54ac9b3d";
    //   const web3 = await new Web3(new Web3.providers.HttpProvider(ethNetwork));

    //   const address = web3.utils.toChecksumAddress(
    //     "0xfDA1999269063c711D71E5fb4839475dE1c94d30"
    //   );
    const address = "0xfDA1999269063c711D71E5fb4839475dE1c94d30";
    const abi = require("../../build/certificate.json").abi;
    const certi = await new web3.eth.Contract(abi, address);

    const account = "0x809c92c89a7b71115ad6d3b739ac6bdee288a80f";

    await certi.methods
      .addStudent(name, rollNo, result, sem1, sem2, gender, university)
      .send({ from: account, gas: 50000, gasPrice: 1e6 });

    //   const value = await certi.methods.value().call();
    //   console.log(value);
    res.json({
      status: true,
      msg: "student added",
    });
  });
});

module.exports = { route };
