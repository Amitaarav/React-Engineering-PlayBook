import { useRef } from "react";
export function Basic(){
    const inputRef = useRef<HTMLInputElement>(null);
    const btnRef = useRef<HTMLInputElement>(null)
    const focusInput  = () => {
        //console.log(inputRef.current)
        if(inputRef.current) {
            console.log(inputRef.current);
            inputRef.current.focus();
        }
        if(btnRef.current){
            console.log(btnRef.current)
            btnRef.current.style.color = "green"
        }
    }

    return(
        <div>
            <input type="text" placeholder="Amit" ref={inputRef}/>
            <button onClick={focusInput} ref={btnRef}>Focus</button>
        </div>
    )
}