import { React, Component, useState } from 'react'
import Newsitem from './Newsitem'

export default function News(props) {
    return (
            <div className="container my-3">
                <h2>News Central - Because you deserve nothing but the truth</h2>
                <br></br>
                <div className="row">
                { props.articles.map((element) => (
                    <div className="col-md-4" key={element.url}>
                        <Newsitem  title={element.title?element.title.slice(0,100):""}  imageurl={element.urlToImage} newsurl={element.url}/>
                    </div>
                ))}
                </div>
            </div>
    )
}
