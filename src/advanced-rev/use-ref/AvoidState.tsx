import { useState, useRef } from "react";

export function AvoidState() {
    // const [name, setName] = useState("");
    const usernameRef = useRef("")
    const passwordRef = useRef("") // pass these value to backend without storing to 
    // const inputChange = (e: any) => {
    //     setName(e.target.value);
    // }

    const login = () => {
        console.log(usernameRef.current.value, passwordRef.current.value);
    }
    return(
        <div className="flex flex-col gap-12">
            <div>
                <label htmlFor="username">Username</label>
                <input ref={usernameRef} type="text" className="border rouded-xl ml-4"/>
            </div>
            <div>
                <label htmlFor="password" >Password</label>
                <input ref={passwordRef} type="password" className="border rouded-xl ml-4"/>
            </div>
            <button onClick={login}> 
                Login
            </button>
        </div>
    )
}