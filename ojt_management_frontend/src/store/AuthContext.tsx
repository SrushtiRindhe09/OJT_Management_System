import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// 1️⃣ Define User Type (adjust fields according to your backend)
type User = {
  id: string;
  name: string;
  email: string;
  role?: string;
};

// 2️⃣ Define Context Type
type AuthContextType = {
  user: User | null;
  login: (data: User) => void;
  logout: () => void;
};

// 3️⃣ Create Context with default undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4️⃣ Define Props Type
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (data: User) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};