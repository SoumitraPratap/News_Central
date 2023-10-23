import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>News Central - Because you deserve nothing but the truth</h2>
                <br></br>
                <div className="row">

                    <div className="col-md-4">
                        <Newsitem title="Sports" descriptionn="mydesc" imageurl="https://images.app.goo.gl/RjsNGfLeNhPyVqpi6"/>
                    </div>

                    <div className="col-md-4">
                        <Newsitem title="Entertainment" imageurl=""/>
                    </div>

                    <div className="col-md-4">
                        <Newsitem title="Business" imageurl=""/>
                    </div>


                </div>
                <br></br>
                <br></br>

                <div className="row">

                    <div className="col-md-4">
                        <Newsitem title="Technology" descriptionn="mydesc" imageurl="https://images.app.goo.gl/RjsNGfLeNhPyVqpi6"/>
                    </div>

                    <div className="col-md-4">
                        <Newsitem title="Politics" imageurl=""/>
                    </div>

                    <div className="col-md-4">
                        <Newsitem title="International" imageurl=""/>
                    </div>


                </div>

            </div>


        )
    }
}

export default news