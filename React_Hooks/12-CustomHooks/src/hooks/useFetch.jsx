import React from 'react'
import { useState } from 'react';

const useFetch = (cb) => {

    const [data, setData] = useState(undefined);
    const [isErrors, setIsErrors] = useState(null);
    const [errorMsg, setErrorsMsg] = useState(undefined);
    const [loading, setLoading] = useState(null);

    async function fn(...args) {
        setLoading(true);
        setIsErrors(false);
        setErrorsMsg(undefined);

        try {
            const response = await cb(...args);
            setData(response);
            setIsErrors(false);
            setErrorsMsg(undefined);

        } catch (error) {
            setIsErrors(true);
            setErrorsMsg(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { data, isErrors, errorMsg, loading, fn };
}

export default useFetch;
