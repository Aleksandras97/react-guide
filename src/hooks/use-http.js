import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((reqConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    if (reqConfig.method === "POST") {
      axios
        .post(reqConfig.url, reqConfig.body)
        .then((res) => {

          const data = res.data;

          applyData(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      axios
        .get(reqConfig.url)
        .then((res) => {

          const data = res.data;

          applyData(data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
