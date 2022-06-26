import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        let cleartimeout = null;
        cleartimeout = setTimeout(async () => {
            try {

                setIsPending(true);
                setData(await timeout(url));
                setIsPending(false);

            } catch (err) {

                if (err.name === 'AxiosError') {
                    setError(err.message);
                    setIsPending(false);
                } else if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
            }
        }, 1000)
        setError(null);
        return () => clearTimeout(cleartimeout); // terminate the fetching process(useEffect()) when the another component is immediately called.
    }, [url])
    return { data, isPending, error }
}

const timeout = async (url) => {

    let res_data = null;

    const response = await axios.get(url);
    res_data = response.data;
    return res_data;
}
export default useFetch;