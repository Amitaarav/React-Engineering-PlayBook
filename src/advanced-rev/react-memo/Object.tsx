import { useState } from "react";
import { Detail } from "./Detail";
export function ObjectMemo() {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const person = { id: 1, name: "Amit", age: 24 };
    return(
        <div>
            <Detail firstCount={firstCount} person={person}/>
            <button onClick={() => setFirstCount(firstCount + 1)}>Increment First Count</button>
            <button onClick={() => setSecondCount(secondCount + 1)}>Increament Second Count</button>
        </div>
    )
}