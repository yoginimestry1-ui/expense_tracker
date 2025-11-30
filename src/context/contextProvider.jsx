import { useState } from "react";
import { ThemeContext } from "./themecontext";

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  let handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
