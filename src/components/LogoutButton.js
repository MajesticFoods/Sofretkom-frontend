import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button className="custom-btn btn-5 logBTN" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};
export default LogoutButton;