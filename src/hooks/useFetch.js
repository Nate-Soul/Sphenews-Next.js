"use client"

import { useEffect, useState } from "react";

const useFetch = (url) => {
    
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if(!res.ok){
                    throw new Error("Failed to fetch data");
                }

                const result = await res.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { 
        data, 
        loading, 
        error 
    };
};

export default useFetch;