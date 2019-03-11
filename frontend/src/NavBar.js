import React from 'react';
import {Link} from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import LoginKey from './helpers/loginkey'

const NavBar = (props) => {

  const logout = (response) => {
  sessionStorage.clear();
  window.location = "/"
  }

  const name = JSON.parse(sessionStorage.getItem('user')).givenName;
  return (
    <header >
      <img src="/images/pirtate-flag.jpg" alt="Logo"/>
      <div className ="flex" >
      <h3>Hello {name}</h3>

      <ul>
        <li className="navLink">
          <Link to="/pirates">Pirates</Link>
        </li>
        <li className="navLink">
          <Link to="/pirates/new">Add Pirate</Link>
        </li>
        <li className="navLink">
          <Link to="/ships">Ships</Link>
        </li>
        <li className="navLink">
          <Link to="/raids" >Raids</Link>
        </li>

      </ul>


  <GoogleLogout

  clientId= {LoginKey.key}
  buttonText="Logout"
  onLogoutSuccess={logout}
  >
  </GoogleLogout>
  </div>
    </header>

  )
}

export default NavBar;
