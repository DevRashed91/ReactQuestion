import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="logo">
                            <NavLink to="/">Logo</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/calculator">Calculator</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;