import { useState, useEffect } from "react";

export function UseStateDemo () {
    const [count, setCount] = useState(0);

    const [user, setUser] = useState({
        id: 1, username: "Amit Kumar", age: 24
    });

    const updateUser = () => {
        // user.age = 25;
        // setUser(user);

        setUser({...user, age: 28})
    }

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const add = () => {
        numbers.push(6);
        setNumbers([...numbers, 6]);
    }
    const someValue = () => {
        console.log("Big logic. Expensive calculation"); // this function is getting called on every re-render
        // avoid this using lazy initialization
        // wrap this inside useState in arrow function useState(() => ({
        //}))
        return 10;
    }

    const [state, setState] = useState(() => ({
        count: someValue(),
        firstName: "Harry",
        lastName: "Potter"
    })) // this will avoid calling someValue on Every re-render

    // setCount requests a future render with new state

    // state is not a normal javascript variable
    // setState triggers a re-render: setting state requests a re-render 

    // Setting state only changes it for the next render
    const increase = () => {
        // setCount(count + 5);
        // setTimeout(()=>{
        //     alert(count)
        // }, 3000)
        // alert(count)
        // setCount(prev => prev + 1)
        // setCount(prev => prev + 1)
        // setCount(prev => prev + 1)

        // Render #1: in this render’s event handler number is always 0
        // console.log("Count: ", count);
        
        // A state variable’s value never changes within a render, even if its event handler’s code is asynchronous.

        //@ts-ignore
        setState({
            ...state,
            count: state.count + 1
        }) // replacing the state object. here loosing the other state object
        // to avoid this: spread the other state
        console.log("Count: ", state.count);
        console.log("First Name: ", state.firstName)
        console.log("Last Name: ", state.lastName)
    }

    useEffect(()=>{
            console.log("count inside useEffect", count);
    }, [count])
        
    // setState is asyncronous
    return (
        <div>
            <button onClick={increase}>Click</button>
                {state.count}
            <div className="flex flex-col items-center">
                <button onClick={add} className="bg-blue-500 rounded-xl p-2 text-white">Add Number</button>
                {numbers.map((number, i) => (
                    <span key={i}>
                        {number}
                    </span>
                ))}
            </div>
            <button onClick={updateUser} className="bg-blue-500 rounded-xl p-2 text-white">Update User</button>
            <div>Age: {user.age}</div>
        </div>
    )
}