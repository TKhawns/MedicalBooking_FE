import React, { useState } from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { handleLoginApi } from '../../../services/userService';
import { loginSuccess } from '../../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState([]);
    const [isShowPassword, setShowPassword] = useState(false);
    const handleOnchangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleOnchangePassword = (event) => {
        setPassword(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async () => {
        setErrorMessage('');
        try {
            let data = await handleLoginApi(username, password);
            if (data && data.errCode !== 0) {
                setErrorMessage(data.message);
            }
            if (data && data.errCode === 0) {
                console.log(data);
                dispatch(loginSuccess(data.userData));
                navigate('/');
            }
        } catch (e) {
            console.log(e);
            if (e.response) {
                if (e.response.data) {
                    setErrorMessage(e.response.data.message);
                }
            }
        }
    };
    const handleShowPassword = () => {
        setShowPassword(!isShowPassword);
    };
    return (
        <div className="login-background">
            <div className="login-container">
                <div className="login-content row">
                    <div className="col-12 text-login">Login</div>

                    <div className="col-12 form-group">
                        <label className="user-label">Username</label>
                        <input
                            type="text"
                            className="login-input form-control"
                            placeholder="Enter your username"
                            onChange={(event) => handleOnchangeUsername(event)}
                        />
                    </div>

                    <div className="col-12 form-group">
                        <label className="pass-label">Password</label>
                        <div className="hide-password">
                            <input
                                type={isShowPassword ? 'text' : 'password'}
                                className="login-input form-control"
                                placeholder="Enter your password"
                                onChange={(event) => handleOnchangePassword(event)}
                            />
                            <span
                                onClick={() => {
                                    handleShowPassword();
                                }}
                            >
                                <FontAwesomeIcon className="icon" icon={isShowPassword ? faEye : faEyeSlash} />
                            </span>
                        </div>
                    </div>
                    <div className="col-12 warning">{errorMessage}</div>
                    <div className="col-12">
                        <button
                            className="btn-login"
                            onClick={() => {
                                handleLogin();
                            }}
                        >
                            Log in
                        </button>
                    </div>
                    <div className="forget-pass">Forgot your password?</div>
                    <div className="sign-with">Or Sign in with: </div>
                    <span className="logo">
                        <img
                            className="logo-img"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Google_Plus_logo_%282015-2019%29.svg/800px-Google_Plus_logo_%282015-2019%29.svg.png"
                            alt="google-logo"
                        />
                        <img
                            className="logo-img"
                            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
                            alt="facebook-logo"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}
export default Login;
