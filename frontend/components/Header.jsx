import React from 'react';
// import Button from "../components/Button"
import Link from 'next/link';
import { Button } from "@mui/material"
import { makeStyles } from '@material-ui/styles';
import { useEthers } from "@usedapp/core"

const Header = ({ login, head }) => {

    const useStyles = makeStyles((theme) => ({
        container: {
            // padding: theme.spacing(4),
            display: "flex",
            justifyContent: "flex-end",
            // gap: theme.spacing(1)
        },
    }))

    const classes = useStyles()

    const { account, activateBrowserWallet, deactivate } = useEthers()

    const isConnected = account !== undefined

    return (
        <div className='border-solid flex p-4 content-center justify-between text-3xl border-2 border-black'>
           <Link href={"/"}>
               Certification
            </Link>
            
            <div className={classes.container}>
            {isConnected ? (
                <Button variant="contained" onClick={deactivate}>
                    Disconnect
                </Button>
            ) : (
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => activateBrowserWallet()}
                >
                    Connect
                </Button>
            )}
        </div>
        
           <div>
            {login ? 
                (
                head === "Search" ? 
                (
                    <Link  href={"/"}>
                        <div className='py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer'>
                            Search Data
                        </div>
                    </Link>
                ) :
                (
                    <Link  href={"/addData"}>
                        <div className='py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer'>
                            Add Data
                        </div>
                    </Link>
                )
                
                )
                :
                (
                    <Link  href={"/login"}>
                        <div className='py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer'>
                            Login/SignUp
                        </div>
                    </Link>
                )
            }
               
           </div>
        </div>
    );
};

export default Header;