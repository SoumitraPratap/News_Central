import React from 'react'
import { useState } from 'react';

function Search() {
    const [newsName, setnewsName] = useState("");
    const [news, setNews] = useState([]);

    function fetchNews(event) {
        event.preventDefault();
        const url = `https://newsapi.org/v2/everything?q=${newsName}&from=2023-09-24&sortBy=publishedAt&apiKey=aaee3d61e4684322813323f585d68de7`;
        fetch(url)
            .then(res => res.json())
            .then(data => setNews(data.results));
    }
    function handleNewsName(event) {
        console.log(event.target.value);
        setnewsName(event.target.value);
    }

    return (
        <form class="d-flex" role="search" onSubmit={fetchNews}>
            <input class="form-control me-2" type="search" value={newsName} onChange={handleNewsName} placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}

export default Search








