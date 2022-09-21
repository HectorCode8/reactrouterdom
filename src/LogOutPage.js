import React from "react";
import { useAuth } from "./auth";

function LogOutPage() {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
   auth.logout();
  };
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Seguro que quieres salir?</label>
        <button type="submit"> Logout </button>
      </form>
    </>
  );
}

export { LogOutPage };
