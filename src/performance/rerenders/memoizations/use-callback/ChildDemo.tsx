import { useState, useCallback } from "react";
import { MemoizedChild } from "./Child";
export const ChildDemo = () => {
    const [count, setCount] = useState(0);
    console.log("App Rendered");

    const handleClick = useCallback(() => {
        console.log("clicked!")
    }, []);

    return(
        <div className="p-2 border rounded">
            <p>Count: {count}</p>
            <div className="space-x-2">
                <button onClick = {() => setCount(count + 1)}>
                    Increament
                </button>
                {/* In line arrow function break the technic of memo function bcoz they create new identity on every render */}
                <MemoizedChild onClick = {handleClick}/>
            </div>
        </div>
    )
}