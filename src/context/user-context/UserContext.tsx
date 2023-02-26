import React, { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { RedirectLoginOptions, LogoutOptions, User } from "@auth0/auth0-react";

export type UserContextType = {
  myUser: User | undefined | null;
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined
  ) => Promise<void>;
  logout: (options?: LogoutOptions | undefined) => void;
  user: User | undefined;
};

type Props = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<UserContextType | null>(null);

const UserProvider = ({ children }: Props) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState<User | undefined | null>(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// custom hook function - move it out
export const useUserContext = () => {
  return useContext(UserContext);
};
