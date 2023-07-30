import React from "react";
import logo from "./logo/logo.png"

const Header = () => {
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" height="50" width="70"/>
                <h1>Nav Keep</h1>
            </div>
        </>
    );
}

export default Header;