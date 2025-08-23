import { Child } from "./Child";

export const Parent = () => {
    const items = ['apple', 'banana', 'cherry'];

    return (
        <div>
            Hello from Parent
            <Child items={items} />
        </div>
    )
}