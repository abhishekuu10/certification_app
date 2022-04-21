import { useEthers , ChainId } from "@usedapp/core"
import helperConfig from "../pages/helper-config.json"
import { makeStyles } from "@material-ui/core"
import networkMapping from "../pages/chain-info/deployments/map.json"
import { constants } from "ethers"
import brownieConfig from "../pages/brownie-config.json"

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.common.white,
        textAlign: "center",
        padding: theme.spacing(4)
    }
}))


 const Main = () => {
    const classes = useStyles()
    const networkName = ChainId.Rinkeby ? helperConfig[4] : "dev"
    let stringChainId = String(ChainId.Rinkeby)
    const certiAddress = ChainId.Rinkeby ? networkMapping[stringChainId]["certificate"][0] : constants.AddressZero
     
    //  console.log(ChainId.Rinkeby, " ", networkName)
     
    return (
        <div>
            hii
        </div>
    )
 }

export default Main;