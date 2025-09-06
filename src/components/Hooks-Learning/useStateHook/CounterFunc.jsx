import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="counter flex  flex-col space-y-4 items-center justify-center">
            <h1 className="font-extrabold text-4xl">Count: {count}</h1>
            <div className="flex gap-2">
                <button onClick={handleIncrement} className="bg-blue-700 text-white font-semibold p-2 rounded-lg">Increment</button>
                <button onClick={handleDecrement} className="bg-blue-700 text-white font-semibold p-2 rounded-lg">Decrement</button>
            </div>
        </div>
    )
}

export default Counter