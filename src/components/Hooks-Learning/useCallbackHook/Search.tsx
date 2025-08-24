import { memo } from "react"

interface SearchProps{
    onChange: (text: string) => void;
}

const Search = ({onChange}: SearchProps) => {
    console.log("Rendering Search Component");
    
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search users..." 
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}

export const MemoizedSearch = memo(Search);