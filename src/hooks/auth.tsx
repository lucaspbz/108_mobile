import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../services/api";

interface AuthState {
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
    created_at: string;
    updated_at: string;
  } | null;
}

interface SigniInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: null | {
    name: string;
    email: string;
    id: string;
    created_at: string;
    updated_at: string;
  };
  token: string;
  loading: boolean;
  signIn(credentials: SigniInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [token, user] = await AsyncStorage.multiGet([
        "@108hours:token",
        "@108hours:user",
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setLoading(false);
      } else {
        setData({ token: "", user: null });
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", { email, password });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@108hours:token", token],
      ["@108hours:user", JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@108hours:token", "@108hours:user"]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, loading, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
