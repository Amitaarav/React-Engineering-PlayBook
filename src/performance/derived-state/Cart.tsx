import { useEffect, useState } from "react";

export const Cart = ({items}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const sum = items.reduce((acc, item) => acc + item.price, 0);
        setTotal(sum);
    }, [items]);

    return(
        <div>
            <h2>Total: {total}</h2>
        </div>
    )
}
// derived state should not be stored in react state
// 