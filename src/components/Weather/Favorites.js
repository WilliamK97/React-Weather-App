import React from 'react'

export default class Favorites extends React.Component{
    render(){
        const favoriteList = this.props.favorites.map(favorite => {
            return this.props.favorites !== 0 ? (
                <div key={favorite}>
                    <li className="orange-text" onClick={this.props.getFavorite}><h4>{favorite}</h4></li>
                </div>
            ) : ( <p>No Favorites Yet</p> )
        })
        return(
            <div>
                <h2>Dina favoriter:</h2>
                <ul>
                    {favoriteList}
                </ul>
            </div>
        )
    }
} 