import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getMe, loginWithEmail } from "../services/api";
import { storage } from "../utils/storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const t = await storage.getItem("session_token");
        if (t) {
          setToken(t);
          // Try loading the user
          const me = await getMe(t).catch(() => null);
          if (me) setUser(me);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const login = async (email, password) => {
    const { token: newToken, user: me } = await loginWithEmail({
      email,
      password,
    });

    setToken(newToken);
    setUser(me ?? null);
    await storage.setItem("session_token", newToken);
  };

  const logout = async () => {
    setToken(null);
    setUser(null);
    await storage.removeItem("session_token");
  };

  const devBypass = async () => {
    const fake = {
      token: "dev-token",
      user: { id: 1, email: "dev@example.com", name: "Dev User" },
    };
    setToken(fake.token);
    setUser(fake.user);
    await storage.setItem("session_token", fake.token);
  };

  const value = useMemo(
    () => ({ token, user, loading, login, logout, devBypass }),
    [token, user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
