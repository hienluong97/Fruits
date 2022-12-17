import { useEffect, useState } from 'react';

export const useFetchData = (func) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading('true');
            const response = await func();
            setData(response);
            setLoading('false');
        }
        fetchData();
    }, []);
    return { data, loading };
};
