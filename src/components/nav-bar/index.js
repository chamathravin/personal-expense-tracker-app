import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
} from "./navBarElement";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                <img src='logoipsum.svg'/>
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink 
                  to="/my-budget-planner"
                  activeStyle={{ color: 'black' }}
                >
                    My Budget
                </NavLink>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;