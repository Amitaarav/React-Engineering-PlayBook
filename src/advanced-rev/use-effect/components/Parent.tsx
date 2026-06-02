import { useState } from "react";
import { Child } from './Child'

export function Parent(){
    const [show, setShow] = useState(false);

    return (
        <div>
            <div>
                <button onClick={() => setShow(!show)} className="bg-blue-500 text-white p-2 rounded-xl m-2 hover:cursor-pointer">
                    Toggle
                </button>
            </div>
            <div>
                {show ? <Child/> : null}
            </div>
        </div>
    )
}