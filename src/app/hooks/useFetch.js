'use client'
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        if(!url) return
        
        async function fetchData() {
            await fetch(url)
                .catch(error => console.log(error))
                .then(async (res) => setData(await res.json()));
        }
        fetchData();
    }, [url])
    
    return data;
}