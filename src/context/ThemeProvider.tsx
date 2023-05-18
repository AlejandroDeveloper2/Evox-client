import React from "react";

import { ThemeContextType } from "../types";

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") ?? "light"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const toggleTheme = (): void => {
    const userTheme: string = theme === "dark" ? "light" : "dark";
    setTheme(userTheme);
  };

  const setThemeToLocalStorage = (): void => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        break;
    }
  };

  const onWindowMatch = () => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

  React.useEffect(() => {
    setThemeToLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider };
export default ThemeContext;
