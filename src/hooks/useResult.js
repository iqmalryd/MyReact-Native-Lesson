import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

export default () => {
    const [results, setResult] = useState({});
    const [errorMessage, setErrorMessage] = useState(false)

    const searchApi = (searchTerms) => {
        const response = new Object;
        searchTerms.forEach(async (m) => {
            try {
                const resp = await axios.get('http://www.omdbapi.com/',
                    {
                        params: {
                            apikey: "5c4ea646",
                            s: m
                        }
                    })
                response[m] = resp.data.Search
            } catch (err) {
                setErrorMessage(true)
            }
        });
        setResult(...results, response)
    }
    console.log(results)
    useEffect(() => {
        searchApi(['disney', 'marvel', 'indonesia', 'harry potter'])

    }, [])
    return [results, errorMessage, searchApi]
    // console.log('ini akhir' + results)

}