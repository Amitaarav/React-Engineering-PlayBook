import { useState } from "react";

export function TrafficLight(){
    const [walk, setWalk] = useState(false);

    function handleWalk(){
        setWalk(!walk);
    }

    return (
        <>
            <button onClick={handleWalk}>
                Change to { walk ? "Stop" : "Walk"}
            </button>

            <h1 className={`${walk ? "text-green-500" : "text-red-700"}`}>
                {walk ? "Walk" : "Stop"}
            </h1>
        </>
    )
}