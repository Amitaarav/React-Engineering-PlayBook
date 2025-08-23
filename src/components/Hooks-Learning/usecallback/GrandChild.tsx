import { memo , useEffect} from "react"
type GrandChildProps = {
    items: string[];
    onClick: () => void;
}

export const GrandChild = ({items, onClick}: GrandChildProps) => {
    useEffect(()=>{

        function onKeyDown () {
            onClick();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [onClick])
    return (
        <div>
            Hii there from GrandChild
            <MemoizedExpensiveComponent items={items} />
            <button onClick={() => onClick()}>Click Me</button>
        </div>
    )
}
type ExpensiveComponentProps = {
    items: string[];
}
const ExpensiveComponent = ({items}: ExpensiveComponentProps) => {
    return null;
}

const MemoizedExpensiveComponent = memo(ExpensiveComponent);