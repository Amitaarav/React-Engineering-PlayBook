import { useState, useEffect } from "react";

interface DemoProps {

}

export const UseEffectHook = ({}:DemoProps) => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        // 1. Actual code we want to run
        console.log("Component mounted or count changed", count);
        //3.  optional return function // cleanup function
        // subscriptions, timers, logging out, etc
        return () => {
            console.log("Cleanup if any before next useEffect call or on unmount");
        }

        //2.  dependency array
    },[count])
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
}