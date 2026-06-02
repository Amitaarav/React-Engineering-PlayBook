import { useState, useEffect } from "react";    

export function PreviousValue(){
    const [currChar, setCurrChar] = useState("A");
    const [prevChar, setPrevChar] = useState([]);

    useEffect(() => {
        console.log("Re-render is happend");
        let tempChar = [...prevChar];
        tempChar.push(currChar);
        setPrevChar([...tempChar]);
    }, [currChar])

    return (
        <div>
            <input value={currChar} onChange={(e) => setCurrChar(e.target.value)} type="text" />
            <div>
                {
                    prevChar.map((char, index)=> (
                        <div key={index}> 
                            {char}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}