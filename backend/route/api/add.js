const { Router } = require("express");
const route = Router();
const Web3 = require("web3-eth");

route.post("/", async (req, res) => {
  var web3;
  const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      web3 = new Web3(window.ethereum);
      return true;
    }
    web3 = undefined;
    return false;
  };

  await ethEnabled();

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

module.exports = { route };
