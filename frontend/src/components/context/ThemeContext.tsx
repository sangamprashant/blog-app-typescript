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

export type ModalsPropsType = {
  isOpenModal: AuthCheck | false;
  setIsOpenModal: React.Dispatch<React.SetStateAction<AuthCheck | false>>;
  modalValue: React.ReactNode;
  setModalValue: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
};

export type AuthPropsType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  token: AuthToken | null;
  setToken: React.Dispatch<React.SetStateAction<AuthToken | null>>;
  isLogged: AuthCheck | false;
  setIsLogged: React.Dispatch<React.SetStateAction<AuthCheck | false>>;
};

type ThemeContextType = {
  appTheme: ThemeStates | null;
  setAppTheme: React.Dispatch<React.SetStateAction<ThemeStates | null>>;
  Theme: typeof Theme;
  authProps: AuthPropsType;
  modalsProps: ModalsPropsType;
};

export const ThemeContext = React.createContext({} as ThemeContextType);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
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
  const [isLogged, setIsLogged] = React.useState<AuthCheck>(
    storedToken ? true : false
  );
  // for modal
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [modalValue, setModalValue] = React.useState<React.ReactNode | null>(
    null
  );

  const modalsProps = {
    isOpenModal,
    setIsOpenModal,
    modalValue,
    setModalValue,
  };

  const authProps = {
    user,
    setUser,
    token,
    setToken,
    isLogged,
    setIsLogged,
  };

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        setAppTheme,
        Theme,
        authProps,
        modalsProps,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
