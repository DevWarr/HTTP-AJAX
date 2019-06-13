import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = props => {
    return (
        <nav>
            <span>D A T A B A S E</span>
            <NavLink activeClassName="active" to="/add">
                Add Friend
            </NavLink>
        </nav>
    );
}

export default NavBar;