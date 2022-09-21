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
          <input
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          type="text" 
          name="username" />
        </label>
        <button type="submit"> Login </button>
      </form>
    </>
  );
}

export { LoginPage };
