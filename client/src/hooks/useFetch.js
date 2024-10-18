import { useEffect, useState } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const axiosInst = axios.create({
        baseURL: process.env.REATC_APP_API_URL,
    })

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axiosInst.get(url)
            setData(res.data)
        } catch (err) {
            setError(true)
        }
        setLoading(false)
    };

    useEffect(() => {
        const fetchData = async () => {
            reFetch()
        };
         fetchData();
    }, []);

    

    return { data, error, loading, reFetch };
};

export default useFetch;