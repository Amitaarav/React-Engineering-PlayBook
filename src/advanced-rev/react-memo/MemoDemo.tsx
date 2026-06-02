import { useState } from "react";
import { Counter } from "./Counter";
export function MemoDemo() {

    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    return(
        <div>
            <Counter count={count}/>
            <button onClick={() => setCount((count) => count + 1)}>
                Increament
            </button>

            <input type="text" value={message}
            onChange={(e)=>setMessage(e.target.value)}
            />
        </div>

        
    )
}