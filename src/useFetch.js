import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
        setState({data: null, loading: true })
        fetch(url).then(response => response.text())
        .then(data => {
            setState({data: data, loading: false})
        })

    }, [url])

    return state;
}