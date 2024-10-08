import React from "react";

export const useFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null);

    const request = React.useCallback(async (url, options) => {
    //async function request(url, options) {
        let response;
        let json;
        try {
            setError(null)
            setLoading(true);
            //const response = await fetch(url, options);
            //const json = await response.json();
            response = await fetch(url, options);
            json = await response.json();
            //setData(json);
            //setLoading(false);
        } catch (error) {
            json = null;
            setError('Error')
        } finally {
            setData(json);
            setLoading(false);
            return { response, json }
        }
    }, []);
    return { data, error, loading, request, error }
}

export default useFetch