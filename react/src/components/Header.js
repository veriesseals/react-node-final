import React from "react"
import Logo from "./img/e-comm-steaks-logo.png";



function Header() {
    return(
        <div className="wrapper">
            <header className="container header">
                <div className="row">
                {/* Logo */}
                    <div className="col-md-4">
                        <div className="header-img-group">
                            <img src={Logo} className="logo"/>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <nav className="right-nav">
                            <ul className="nav-items">
                                {/* <li><a href="/">Home</a></li> */}
                                <li><a href="http://localhost:3002/favSteak/api">All Logged Meals Api</a></li>
                                {/* <li><a href="./About">About E-Comm Steaks</a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
};

export default Header;