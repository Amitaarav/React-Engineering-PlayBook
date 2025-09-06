import { useState } from "react";
let count = 1;
function IdempotentReact(){
        const [flag, setFlag] = useState(1);
        function changeFlag(){
            console.log("Change Flag Function");
            setFlag((prev)=>{
                console.log("inside setter")
                count = count + 1;
                return prev + 1;
            })
        }
        console.log("Count", count);
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-4xl font-bold">Idempotent React</h1>
                <h2 className="text-2xl">Count: {count}</h2>
                <h2 className="text-2xl">Flag: {flag}</h2>
                <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:cursor-pointer" onClick={changeFlag}>Change Flag</button>
            </div>
        )
}
export default IdempotentReact;