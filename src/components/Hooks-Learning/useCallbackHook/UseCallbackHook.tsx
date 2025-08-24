import { useState} from "react"
import { MemoizedSearch } from "./Search";

const allUsers = [
    'john',
    'alex',
    'maria',    
    'amit',
    'arpit',
    'priyanshi'
]

interface DemoProps {}

export const UseCallbackHook = ({}: DemoProps) => {
    const [users, setUsers] = useState(allUsers);

    const handleSearch = (text: string) => {
        const filteredUsers = allUsers.filter((user) => user.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredUsers);
    }

    const shuffle = (array: string[]) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    
    return(
        <div>
            <div>
                <button onClick={() => setUsers(shuffle(allUsers))}>Shuffle</button>
            </div>
            <MemoizedSearch onChange={handleSearch} />
        
        <ul>
            {users.map((user) => (
                <li key={user}>{user}</li>
            ))}
        </ul>
        </div>
    )
}