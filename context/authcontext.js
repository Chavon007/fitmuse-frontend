"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = async (email, password) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        router.push("/cart");
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      const storedToken = localStorage.getItem("token");
      console.log("Stored Token:", storedToken);

      if (!storedToken) {
        console.log("No token found in localStorage.");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/auth/verify-user`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        const data = await res.json();
        console.log("Verify User Response:", data);

        if (res.ok) {
          setUser(data.user);
          setToken(storedToken);
          console.log("✅ User verified and set in context:", data.user);
        } else {
          console.warn("❌ Invalid token or verification failed.");
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
        }
      } catch (err) {
        console.error("❌ Error verifying user:", err);
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
