import { memo } from "react"
export const  Counter = memo(({count}) => {
    console.log("Re render happen")
    return (
        <h2>
            Count: {count}
        </h2>
    )
})