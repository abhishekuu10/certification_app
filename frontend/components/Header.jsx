import React from "react";
import Button from "../components/Button";
import Link from "next/link";
// import { Button } from "@mui/material";
// import { makeStyles } from "@material-ui/styles";
// import { useEthers } from "@usedapp/core";

const Header = ({ login, head }) => {
  return (
    <div className="border-solid flex p-4 content-center justify-between text-3xl border-2 border-black">
      <Link href={"/"}>Certification</Link>

      <div>
        {login ? (
          head === "Search" ? (
            <Link href={"/"}>
              <div className="py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer">
                Search Data
              </div>
            </Link>
          ) : (
            <Link href={"/addData"}>
              <div className="py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer">
                Add Data
              </div>
            </Link>
          )
        ) : (
          <Link href={"/login"}>
            <div className="py-1 px-3 text-lg border-solid  border-2 border-black cursor-pointer">
              Login/SignUp
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
