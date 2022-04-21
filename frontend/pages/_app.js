import '../styles/globals.css'
import {DAppProvider, ChainId} from "@usedapp/core"

function MyApp({ Component, pageProps }) {

 
  
  return <DAppProvider config={{
    supportedChains: [ChainId.Rinkeby],
    notifications: {
      expirationPeriod: 1000,
      checkInterval: 1000
    }
  }}>
   
        <Component {...pageProps} />

        </DAppProvider>
}

export default MyApp
