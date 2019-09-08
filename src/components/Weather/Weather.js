import React from 'react'
import Clock from "./Clock"

 
export default class Weather extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="card medium blue-grey darken-1">
                    <div className="card-content">
                        <h1 className="orange-text">Aktuellt Väder</h1>
                        <hr/>
                        <h3 className="white-text">{this.props.weather.name}</h3>
                        <h6 className="white-text marginFix"><Clock/></h6>
                        <h6 className="white-text marginFix">{this.props.temp}°C</h6>
                        <h6 className="white-text marginFix">{this.props.description}</h6>
                        <h6 className="white-text">Add to Favorites</h6>
                        <button onClick={this.props.setFavorite} className="waves-effect waves-light btn orange marginFix">{this.props.weather.name}</button>
                           
                    </div>
                </div>
            </div>
        )
    }
}