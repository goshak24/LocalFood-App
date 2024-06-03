import yelp from '../components/utilities/api/yelp'; 
import React, { useEffect, useState } from 'react'; 

export default useYelpSearch = (term) => { 
    const [results, setResults] = useState([]); 
    const [errorMessage, setErrorMessage] = useState(''); 
    
    const searchApi = async (term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 8,
                    term: term,
                    location: 'london'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }; 

    useEffect(() => {
        searchApi(term); 
    }, [term]); 
    
    return [searchApi, results, errorMessage]; 
} 