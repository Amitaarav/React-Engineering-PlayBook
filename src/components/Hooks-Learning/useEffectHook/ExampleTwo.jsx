import React, { useState } from "react";
const ExampleComponent = () => {
    const [resourceType, setResourceType] = useState('posts');
    return (
        <>
            <h1>Hii there</h1>
            <div className="flex gap-2">
                <button onClick={() => setResourceType('posts')} className="p-1 bg-orange-500 rounded-md text-white font-medium text-2xl">Posts</button>
                <button onClick={() => setResourceType('users')} className="p-1 bg-orange-500 rounded-md text-white font-medium text-2xl">Users</button>
                <button onClick={() => setResourceType('comments')} className="p-1 bg-orange-500 rounded-md text-white font-medium text-2xl">Comments</button>
            </div>
        <h1 className="text-4xl">{resourceType}</h1>
        </>
    )
}

export default ExampleComponent