import React from 'react';
import logo from '../../images/logo.png'
import "./Header.css";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders Reviews</Link>
                <Link to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default Header;
