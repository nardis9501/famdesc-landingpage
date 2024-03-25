"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  color: "",
  handleThemeColor: () => {},
});
export default function Providers({ children }) {
  const [color, setColor] = useState("");

  useEffect(() => {
    const getThemeColorFromStorage = localStorage.getItem("themeColor");
    if (getThemeColorFromStorage) {
      return setColor(getThemeColorFromStorage);
    }
    setColor("blue");
  }, []);
  useEffect(() => {
    color && localStorage.setItem("themeColor", color);
  }, [color]);
  const handleThemeColor = (e) => {
    setColor(e.target.value.toLowerCase());
  };
  return (
    <AppContext.Provider value={{ color, handleThemeColor }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
