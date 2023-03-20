import React, { useEffect, useState } from 'react';

export const useFetch = (url, crud, body, bool) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const config = {
        method: crud,
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      };

    useEffect(() => {
          const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url, config);
                const json = await res.json();
                setResponse(json);
                setIsLoading(false);
              } catch (error) {
                setError(error);
              }
            };
            if (bool) { fetchData() }
        }, [bool]);
        return { response, error, isLoading }
     };