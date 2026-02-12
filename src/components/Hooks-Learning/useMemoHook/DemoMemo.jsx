import { useState } from "react";
function DemoMemo(){
    const [text, setText] = useState(0);
    const [isDarkTheme, setDarkTheme] = useState(false);
    console.log("Rendering....")
    // Heavy Operation: Expensive calculation
    // memoization is needed for heavy operation
    // Function to check if a number is prime
    function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
    }
// Function to get nth prime number
    function nthPrime(n) {
    let count = 0;
    let num = 1;

    while (count < n) {
        num++;
        if (isPrime(num)) {
        count++;
        }
    }
    return num;
    }

    const prime = nthPrime(text);

    return(
        <div className={"border-2 w-96 h-96 m-4 p-2 bg-black" + (isDarkTheme ? "bg-black text-white" : "bg-white text-black")}>
            <div>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border-2"/>
            </div>
            <div>
                <h1 className="mt-4">nth Prime: {prime}</h1>
            </div>
        </div>
    )
}
export default DemoMemo