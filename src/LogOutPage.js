import React from "react";

function LogOutPage() {
  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");
  }
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>
          Seguro que quieres salir?
        </label>
        <button type="submit"> Logout </button>
      </form>
    </>
  );
}

export { LogOutPage };