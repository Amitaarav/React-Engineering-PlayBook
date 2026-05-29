import { useMemo } from "react";

// @ts-ignore
export const Users = ({list}) => {
    console.log("Users component rendered");
    // @ts-ignore
    const sorted = list.sort((a, b) => a.localCompare(b));

    // sorted using useMemo

    const sortedMemo = useMemo(() => {
        console.log("Sorting expensive list");
        return [...list].sort((a, b) => a.localCompare(b));
    }, [list])

    return(
        <div>
            <h2>Sorted Users</h2>
            {
                // @ts-ignore
                sortedMemo.map((user, index) => (
                    <div key={index}>{user}</div>
                ))
            }
        </div>
    )
}