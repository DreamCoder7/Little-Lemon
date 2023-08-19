import { createContext, ReactNode, useState } from "react";
import { AuthenticatedUserProps } from "../types";

interface AuthContextType extends AuthenticatedUserProps {
  login: (userData: AuthenticatedUserProps) => void;
  signup: (userData: AuthenticatedUserProps) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthContextProvider");
//   }
//   return context;
// };

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authenticatedUser, setAuthenticatedUser] =
    useState<AuthenticatedUserProps>({
      email: null,
      name: null,
    });

  const loginHandler = (userData: AuthenticatedUserProps) => {
    setAuthenticatedUser(userData);
  };

  const signupHandler = (userData: AuthenticatedUserProps) => {
    setAuthenticatedUser(userData);
  };

  const logoutHandler = () => {
    setAuthenticatedUser({
      email: null,
      name: null,
    });
  };

  const value: AuthContextType = {
    ...authenticatedUser,
    login: loginHandler,
    signup: signupHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
