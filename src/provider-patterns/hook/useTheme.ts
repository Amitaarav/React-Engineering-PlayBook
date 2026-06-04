import { ThemeContext } from "../context";
import { useContext } from "react";

export const useTheme = () => {
    const themeContext = useContext(ThemeContext);

    if(!themeContext){
        throw new Error("useTheme must be used within ThemeProvider")
    }

    return themeContext;
}