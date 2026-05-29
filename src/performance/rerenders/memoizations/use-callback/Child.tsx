import { memo } from "react"

// @ts-ignore
const Child = ({onClick}) => {
    console.log("Childe Rendered");
    return(
        <button onClick={onClick}>
            Click Me
        </button>
    )
}

export const MemoizedChild = memo(Child);