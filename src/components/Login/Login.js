import React, {useEffect, useRef} from 'react';
import './Login.css'
import {Link} from "react-router-dom";
import Input from "../Input";
const Login = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    },[])
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <form className="text-center">
                <h4>User Login</h4>

                <input ref={inputRef} type="email" placeholder="Your Email" className="form-control"/>
                <br/>
                <input type="password"  placeholder="Your password" className="form-control"/>
                <br/>
                <input type="submit" className=" btn-regular" value="Login"/>
                <br/>
                <hr/>
                <p><Link to="/register"  className="btn btn-primary">Create your Emajhon Account</Link></p>
            </form>


        </div>
    );
};

export default Login;
