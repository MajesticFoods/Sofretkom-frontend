import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//destructing
function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button  className="custom-btn btn-5" onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;