import React, { useState, useEffect } from 'react';
import axios from '../axios';
import requests from '../requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                console.log(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
            );
        }

        fetchData();
    }, []);

    console.log(movie);
    return (
        <header> {/* <<< Background Image */}
            {/* Title */}
            {/* div > 2 buttons */}
            {/* Description */}
        </header>
    )
}

export default Banner
