import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = () => {

    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </header>
        </div>
    )
}

export default NavBar;