import React from 'react';
import GoogleLogin from 'react-google-login';
import LoginKey from '../helpers/loginkey'

const Login = (props) => {

  const responseGoogle = (response) => {
    sessionStorage.setItem('user', JSON.stringify(response.profileObj));
    console.log("LOGGED IN  ", JSON.parse(sessionStorage.getItem('user')).givenName);
    window.location = '/';
  }

  return(
    <div className="login">
    <h1>LOGIN WITH GOOGLE</h1>
    <GoogleLogin
    clientId={LoginKey.key}
    buttonText="Login "
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    />
    </div>
  );
}

export default Login;
