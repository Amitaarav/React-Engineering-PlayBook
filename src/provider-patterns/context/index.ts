import { createContext } from "react";
type ThemeContextType = {
    theme: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null); // just empty value as default

export { ThemeContext };