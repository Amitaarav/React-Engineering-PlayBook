import { useState } from "react"
import { ThemeContext } from "../context"

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme((prev) => !prev);
        document.body.classList.toggle("dark") //
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
