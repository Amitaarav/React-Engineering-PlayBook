import { useState, useEffect, useRef} from "react";
function ExampleComponent(){
    const [count, setCount] = useState(0);

    let data = useRef( {
        a: 1,
        b: 2
    });

    useEffect(()=>{
        setCount((count)=>count + 1);
    },[data.current])

    /**
     * 1. component is rendered
     * 2. Effect runs
     * 3. state is updated
     */
    // when no dependency is provided then the effect will run afte every single render, which can lead to continuous 
    // loop of update if state is being updated.
    // keep increasing the value of count if no dependency of the count is provided

    // const countHandler = useEffect(()=>{
    //     setCount(count + 1);
    // },[count])

    return(
        <div>
            <h1>Count: {count}</h1>
            {/* <button onClick={()=> setCount(count + 1)}>Increment</button> */}
        </div>
    )
}

export default ExampleComponent;