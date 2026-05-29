import { useState } from "react";
import { getUser, User } from "./Users"

export const UserSortingDemo = () => {
    const [count, setCount] = useState(0);
    const user = useState(() => getUser());

    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount((c) => c + 1)}>
                Increment
            </button>
            <User />
        </div>
    )
}