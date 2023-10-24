import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
    
    constructor(){
        super();
        this.state={
            articles: [],
            loading:false
            
        }
    }

    async componentDidMount(){
        let url="https://newsapi.org/v2/everything?q=india&from=2023-09-24&sortBy=publishedAt&apiKey=aaee3d61e4684322813323f585d68de7";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles});
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News Central - Because you deserve nothing but the truth</h2>
                
                <br></br>
                <div className="row">

                {this.state.articles.map((element)=>{
                     return <div className="col-md-4" key={element.url}>
                     <Newsitem  title={element.title?element.title.slice(0,100):""}  imageurl={element.urlToImage} newsurl={element.url}/>
                 </div>
                    
                })}


                </div>
                

            </div>


        )
    }
}

export default news
