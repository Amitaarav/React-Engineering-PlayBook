import {useState, useEffect} from "react";

export function Dependencies(){
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const [countries, setContries] = useState(["India", "USA", "Pakistan"]);
    const [user, setUser] = useState({id: 1, username: "Amit", age: 15});

    const increase = () => {
        setCount(count + 1);
    }

    const showContent = () => {
        setShow(true);
    }

    const addContries = () => {
        //countries.push("Germany");
        setContries([...countries, "Germany"]);
    }

    const changeUser = () => {
        user.age = 17
        setUser(user)
    }

    useEffect(() => {
        console.log("Use effect triggered")
    },
    [count, show, countries, user])

    return(
        <>
            <div>
                <button onClick={increase}>Increase</button><span>{count}</span>
                <button onClick={showContent}>Show</button><span>{show}</span>
                <button onClick={addContries}>Add Country</button><span>{countries}</span>
                <button onClick={changeUser}>Change User</button><span>{user.age}</span>
            </div>
        </>
    )

}