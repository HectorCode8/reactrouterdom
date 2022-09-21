import { useState, React } from "react";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({username})
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
