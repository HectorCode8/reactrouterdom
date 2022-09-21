import { useState, React } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log("login", username);
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="password"
            name="password"
          />
        </label>
        <button type="submit"> Login </button>
      </form>
    </>
  );
}

export { LoginPage };
