"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  color: "",
  handleThemeColor: () => {},
});
export default function Providers({ children }) {
  const [color, setColor] = useState("blue");
  const handleThemeColor = (e) => {
    console.log(e.target.value.toLowerCase());

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
