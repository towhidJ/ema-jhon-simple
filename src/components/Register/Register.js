import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import {Button} from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const {handleGoogleAuthLogin} = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.form||'/';
    const history = useHistory();
    const singInWithGoogle=()=>{
        handleGoogleAuthLogin().then((result) => {
            history.push(redirect_url);
        })
            .catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <form className="text-center">
                <h4>User Registration</h4>
                <input type="email" placeholder="Your Email" className="form-control"/>
                <br/>
                <input type="password"  placeholder="Your password" className="form-control"/>
                <br/>
                <input type="password"  placeholder="Re-enter password" className="form-control"/>
                <br/>
                <input type="submit" className=" btn-regular" value="Login"/>
                <br/>
                <hr/>
                <Button variant="warning" onClick={singInWithGoogle}>Google Login</Button>{' '}
            </form>


        </div>
    );
};

export default Register;
