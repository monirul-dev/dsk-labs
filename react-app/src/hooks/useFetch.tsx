import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [result, setResult] = useState<T>();

    useEffect(() => {
        async function requestFetch() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setResult(data);
            } catch (err) {
                console.log(err);
            }
        }
        requestFetch();
    }, []);

    return result;
}
