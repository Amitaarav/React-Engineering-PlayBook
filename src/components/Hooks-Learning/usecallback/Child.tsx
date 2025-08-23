import { useCallback, useMemo } from "react";
import { GrandChild } from "./GrandChild";

type ChildProps = {
    items: string[];
}

export const Child = ({items}: ChildProps) => {

    const processedItems = useMemo(()=>{
        return items.map(item => item.toUpperCase());
    }, [items]);

    const handleClick = useCallback( () => {
        console.log(`Processed Items: ${processedItems.join(", ")}`);
    }, [processedItems]);

    return (
        <div>
            Hii there from Child
            <GrandChild items={processedItems} onClick={handleClick} />
        </div>
    )
}