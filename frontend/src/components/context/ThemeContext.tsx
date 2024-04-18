import React from "react";
import { Theme } from "./Theme";

export type AuthUser = {
  name: string;
  email: string;
};

export type ThemeStates = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export type AuthToken = string;

export type AuthCheck = boolean;

type ThemeContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  appTheme: ThemeStates | null;
  setAppTheme: React.Dispatch<React.SetStateAction<ThemeStates | null>>;
  Theme: typeof Theme;
  token: AuthToken | null;
  setToken: React.Dispatch<React.SetStateAction<AuthToken | null>>;
  isLogged: AuthCheck | false;
  setIsLogged: React.Dispatch<React.SetStateAction<AuthCheck | false>>;
};

export const ThemeContext = React.createContext({} as ThemeContextType);

export const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
  // for user
  const [user, setUser] = React.useState<AuthUser | null>(null);
  // for theme
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? (storedTheme as ThemeStates) : "light";
  const [appTheme, setAppTheme] = React.useState<ThemeStates | null>(
    initialTheme
  );
  // for token
  const storedToken = sessionStorage.getItem("token");
  const initialToken = storedToken ? (storedToken as AuthToken) : "";
  const [token, setToken] = React.useState<AuthToken | null>(initialToken);
  // is Logged or not
  const [isLogged, setIsLogged] = React.useState<AuthCheck>(storedToken ? true : false);

  return (
    <ThemeContext.Provider
      value={{ user, setUser, appTheme, setAppTheme, Theme, token, setToken, isLogged, setIsLogged }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
