import { memo } from "react"
export const Detail = memo( ({firstCount, person}) => {

    console.log("Detail re-render")
    return(
        <div>
            Details {firstCount}
        </div>
    )
})

// pass only the needed props