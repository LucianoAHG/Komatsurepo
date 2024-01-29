import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { PropTypes } from "prop-types";

const portal = 'Portal';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(portal) ?? false
  );

  const login = useCallback(function () {
    window.localStorage.setItem(portal, true);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(function () {
    window.localStorage.removeItem(portal);
    setIsAuthenticated(false);
  }, []);


  const url = `https://${'4qgriojtu7dljej7uodkn62536'}.auth.${'us-east-1_Fe4DNTxR0'.split('_')[0]}.amazoncognito.com/login?response_type=code&client_id=${'4qgriojtu7dljej7uodkn62536'}&redirect_uri=http://192.168.1.83:3000/`;

  console.log ("url", url)


  const value = useMemo(
    () => ({
      login,
      logout,
      isAuthenticated,
    }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.object
};

export function useAuthContext() {
  return useContext(AuthContext);
}
