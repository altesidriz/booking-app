import { useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axiosInstance.get(url);
            console.log(res.data); // Add this line
            if (Array.isArray(res.data)) {
                setData(res.data);
            } else {
                setData([]); // Or some default array
                setError(true); // Or handle the error appropriately.
                console.error("API response is not an array:", res.data);
            }
        } catch (err) {
            setError(true);
        }

    useEffect(() => {
        const fetchData = async () => {
            reFetch()
        };
         fetchData();
    }, []);

    

    return { data, error, loading, reFetch };
};

export default useFetch;