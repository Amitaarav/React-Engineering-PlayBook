import { useState } from "react";

const initialData = [
    {id: 1, count: 1},
    {id: 2, count: 2},
    {id: 3, count: 3}
]

function Idempotent(){
    const [data, setData] = useState(initialData);

    function changeData(id) {
        console.log("Change Data Function");
        setData((prev) => {
            console.log("inside the setter");
            
            return prev.map((item) => {
                // do not mutate object inside setter function
                // if you want to update the object inside setter function then you need to create a new object copy from the existing object
                //item.count  = item.count + 1;
                return {...item, count: item.count + 1};
            })
        })
    }
    console.log(initialData)
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold">Idempotent React</h1>
            <h2 className="text-2xl">Count: {data.map((item) => item.count)}</h2>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:cursor-pointer" onClick={() => changeData(1)}>Change Data</button>
        </div>
    )
}

export default Idempotent