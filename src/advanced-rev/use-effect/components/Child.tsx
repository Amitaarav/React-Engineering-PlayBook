import { useEffect } from "react";

export function Child(){

    let count = 0;
    useEffect(() => {
        let myInterval = setInterval(()=>{
            count++;
            console.log("Count: ", count);
        }, 3000); // this causes memory leak

        return () => {
            console.log("Component is destroyed")
            if(myInterval){
                clearInterval(myInterval);
            }
        }
    }, [])

    return(
        <div>
            Child Component
        </div>
    )
}