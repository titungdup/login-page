import { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextType {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Create an Authentication Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create an AuthProvider component
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  // Function to set the token
  const login = (newToken: string) => {
    setToken(newToken);
  };

  // Function to log out
  const logout = () => {
    setToken(null);
  };

  // Provide the token and login/logout functions to the child components
  const contextValue = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

// Custom hook to access the authentication context
export function useAuth() {
  return useContext(AuthContext);
}
