import { useEffect, useState } from "react";

export default function useFetch<T>(url: string, obj: T) {
    const [result, setResult] = useState<T>(obj);

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
