import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to fetch data from API
const useFetchData = (url, month, refreshKey = 0) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(url, {
                params: {
                    month: month,
                }
            });
            setData(response.data);
            setError(null);
          } catch (err) {
            console.error('Error fetching data:', err);
            setError(err);
            setData(null);
          } finally {
            setLoading(false);
          }
        };

        fetchData();
      }, [url, month, refreshKey]);

    return { data, loading, error };
};

export default useFetchData;

    

