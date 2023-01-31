import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Url in useFetch:", url);
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log("Error", error);
        setIsLoading(false);
        setError("Download is failed");
      }
    };
    getData();
  }, [url]);
  return { data, isLoading, error };
}

export default useFetch;
