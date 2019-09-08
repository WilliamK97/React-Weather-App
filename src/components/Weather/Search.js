import React from 'react'
 
export default class Search extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.search}>
                <div className="input-field center">
                    <input className="black-text" type="search" name="city" placeholder="Search City"/>
                    <label className="label-icon"></label>
                </div>
            </form>
        )
    }
}