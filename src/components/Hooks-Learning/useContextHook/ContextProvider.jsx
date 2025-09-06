import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({children}) => {

    const [darkModeOn, setDarkModeOn] = useState(false);
    const [englishLanguage, setEnglishLanguage] = useState(true);

    return(
        <Context.Provider value={{darkModeOn, setDarkModeOn, englishLanguage, setEnglishLanguage}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider