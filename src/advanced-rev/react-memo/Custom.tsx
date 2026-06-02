import { useState } from "react";
import { Person } from "./Person";

export function Custom(){
    const [person, setPerson] = useState({
        name: "Amit",
        age: 24
    });

    return(
        <div>
            <Person name={person.name} age={person.age}/>
            <button onClick = {() => setPerson({
                ...person,
                age: person.age + 1
            })}>
                Increament Age
            </button>

            <button onClick = {() => setPerson({
                ...person,
                name: "Ron"
            })}>
                Update Name
            </button>
        </div>
    )
}