import { useState, useEffect, useRef } from "react";
import { set } from "zod";
const API_URL = 'https://jsonplaceholder.typicode.com';

type Post = {
    id: number;
    title: string;
}

export const FetchData = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const [page, setPage] = useState(0)
    const abortControllerRef = useRef<AbortController | null>(null);
    useEffect(()=>{
        const fetchedData = async () => {

            // avoid race condition where previous request is still loading and user triggers another request
            abortControllerRef.current?.abort(); //abort previous request if any
            abortControllerRef.current = new AbortController(); // set new abort controller for current request
            const signal = abortControllerRef.current?.signal;

            setIsLoading(true);

            try{
                const response = await fetch(`${API_URL}/posts?page=${page}`,{
                    signal: abortControllerRef.current?.signal
                });

                const data = await response.json() as Post[];
                setPosts(data);
            }
            catch(err: any){

                if(err.name === 'AbortError'){
                    console.log('Fetch aborted');
                    return;
                }

                setError(err);
            }
            finally{
                setIsLoading(false);
            }
        }
        fetchedData();
    },[page])

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return (
            <div>
                Something went wrong! Please try again
            </div>
        )
    }
    return (
        <div>
            <h1>Fetching Data in React</h1>
            <button onClick={()=> setPage(page + 1)}>Increase Page: {page}</button>
            {isLoading && <div>Loading...</div>}
            {
                isLoading && 
                <ul>
                    {
                        posts.map((post)=>{
                            return (
                                <li key={post.id}>
                                    {post.title}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

// blank screen ;; we have not loading and error handling yet while network is slower