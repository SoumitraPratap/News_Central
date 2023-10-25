import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let fallbackurl = "https://images.indianexpress.com/2023/10/express-view-36.jpg";
    let {title , description , imageurl , newsurl} = this.props;   // destructuring
    return (

      <div className="container my-3">
        <div className="card" style={{width: "18rem;"}}>
            <img src={ imageurl ? imageurl : fallbackurl } className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title} ...</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} className="btn btn-primary">Explore</a>
            </div>
            </div>
      </div>
    )
  }
}

export default Newsitem
