import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  if(auth.user) {
    
  }

  return (
    <>
        <h1>Perfil</h1>
        <p>Welcome, {auth.user.username}</p>
    </>
  );
}

export { ProfilePage };
