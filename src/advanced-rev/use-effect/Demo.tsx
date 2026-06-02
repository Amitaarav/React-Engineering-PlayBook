import { useState, useEffect} from "react";

export function UseEffectDemo (){
    const [users, setUsers] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false)
    const fetchData = async() => {
        console.log("Getting Server Response ") // loop continuosly like a chain reaction
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }

    const update = () => {
        setIsUpdated(true)
    }

    useEffect(() => {
        fetchData();
    }, [isUpdated])

    // fetchData();

    return (
        <div>
            <div>
                {
                    users?.map((user)=>(
                        <div key={user.id}>
                            {user.name}
                        </div>
                    ))
                }
            </div>
            <button onClick={update}>Refresh</button>
        </div>
    )
}