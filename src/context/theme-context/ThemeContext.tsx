import React, { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectLoginOptions, LogoutOptions, User } from "@auth0/auth0-react";

// type for the states and functions the Context will provide
export type UserContextType = {
  myUser: User | undefined | null;
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
  logout: (options?: LogoutOptions | undefined) => void;
  user: User | undefined;
};

// type for the children prop
type Props = {
  children: React.ReactNode;
};

// set UserContext to null
export const ThemeContext = React.createContext<UserContextType | null>(null);

const ThemeProvider = ({ children }: Props) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState<User | undefined | null>(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <ThemeContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        user,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

// custom hook function
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
