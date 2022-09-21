import React from "react";

const AuthContext = React.createContext();

function AuthProvider({ chhildren }) {
    const auth = {}
  return <AuthContext.Provider value={auth}>
    {chhildren}
  </AuthContext.Provider>;
}


function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}


export {
    AuthProvider,
    useAuth
};
