import React from 'react';
import { useState } from 'react';

export default function Search(props) {
    const [init, setInit] = useState(false);
    const [query, setQuery] = useState("");

    async function handleClick() {
        let url = `https://newsapi.org/v2/everything?q=${ encodeURIComponent(query != "" ? query : "India") }&from=2023-09-25&sortBy=publishedAt&apiKey=d6ebd0c313ea482fb744d67ff0e18724`;
        let data = await fetch(url);
        let parsedData = await data.json();
        if (parsedData.articles) {
            props.setArticles(parsedData.articles.filter(e => e.title != "[Removed]"));
        }
    }

    if (!init) {
        handleClick();
        setInit(true);
    }

    function handleTyping(ev) {
        setQuery(ev.target.value);
    }

    return (
        <>
        <input class="form-control me-2" type="search" value={query} onChange={handleTyping} placeholder="News Topic" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" onClick={handleClick}>Search</button>
        </>
    )
}
