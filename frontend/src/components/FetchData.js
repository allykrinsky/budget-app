import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, params) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Fetching data from:', url, 'with params:', params);
        const fetchData = async () => {
          try {
            // const response = await axios.get(url, { params });
            const response = await axios.get(url, {
                params: {
                    month: 6,
                }})
            setData(response.data);
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, params);

    // console.log('Returning data:', { data, loading, error });
    return { data, loading, error };
};

export default useFetchData;

    

