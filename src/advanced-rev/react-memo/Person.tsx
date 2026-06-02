import { memo } from "react";

// this should re render only when name property changes
export const Person = memo(({name, age}) => {
    console.log("Person component is re-rendered");
    console.log(name, age)
    return(
        <div>
            {name}, {age}
        </div>
    )
},(prevProps, nextProps) => {
        return prevProps.name === nextProps.name;
    }
 )