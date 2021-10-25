import React from 'react';
import logo from '../../images/logo.png'
import "./Header.css";
import {Link} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo}/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders Reviews</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user.email ? <Link to="/login" onClick={logout}>Logout</Link> : <Link to="/login">Login</Link>
                }
                <Link to="/register">Register</Link>
            </nav>
        </div>
    );
};

export default Header;
