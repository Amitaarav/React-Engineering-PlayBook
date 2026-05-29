import { useState } from "react"
import { MemoizedProfileCard } from "./ProfileCard"

export const MemoizedProfileTracker = () => {
    const [ value, setValue] = useState("")

    return(
        <div className="p-2 border rounded">
            <input 
            className="border rounded p-1"
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            {/* Hard coded value props */}
            <MemoizedProfileCard name="Amit" />
        </div>
    )
}