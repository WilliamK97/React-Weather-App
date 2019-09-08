import React from 'react'

export default class Favorites extends React.Component{
    render(){
        const favoriteList = this.props.favorites.map(favorite => {
            return this.props.favorites !== 0 ? (
                <div key={favorite}>
                    <li onClick={this.props.getFavorite}>{favorite}</li>
                    <button onClick={() => (this.props.removeFavorite(favorite))}>remove</button>
                </div>
            ) : <p>No Favorites Yet</p>
        })
        return(
            <div>
                <ul>
                    {favoriteList}
                </ul>
            </div>
        )
    }
} 