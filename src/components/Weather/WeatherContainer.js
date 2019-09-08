import React from 'react'
import Weather from './Weather';
import WeatherList from './WeatherList';
import Search from "./Search";
import Favorites from './Favorites';

const myAPIKey = "d3afd3964d6c3b2ad7acb2715e5f5028";
const url = "http://api.openweathermap.org/data/2.5/";

export default class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Weather: [],
          Temp: [],
          MoreInfo: [],
          WeatherDescription: [],
          favorites: []
        };
      }

      componentDidMount(){
        navigator.geolocation.getCurrentPosition((p) => {
            //Current weather data API
            fetch(`${url}weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${myAPIKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                Weather: json,
                Temp: json.main.temp,
                WeatherDescription: json.weather[0].description

            }));
            //forecast API
            fetch(`${url}forecast?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${myAPIKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                MoreInfo: json.list
                
            }));
        });
    }

    handleSearch = (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        //Current weather data API
        fetch(`${url}weather?q=${city}&appid=${myAPIKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                Weather: json,
                Temp: json.main.temp,
                WeatherDescription: json.weather[0].description
            }));
            //forecast API
            fetch(`${url}forecast?q=${city}&appid=${myAPIKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                MoreInfo: json.list
            }));
    }

    handleFavorites = () => {
        
        if(localStorage.length !== 0){
            this.setState({
                favorites: JSON.parse(localStorage.getItem('Favorites'))
            });
        }
    }

    getFavorite = (e) => {

        e.preventDefault();

        const city = e.target.innerHTML;
        //Current weather data API
        fetch(`${url}weather?q=${city}&appid=${myAPIKey}&units=metric`)
        .then(response => response.json())
        .then(json => this.setState({
            Weather: json,
            Temp: json.main.temp,
            WeatherDescription: json.weather[0].description
        }));
        //forecast API
        fetch(`${url}forecast?q=${city}&appid=${myAPIKey}&units=metric`)
        .then(response => response.json())
        .then(json => this.setState({
            MoreInfo: json.list
        }));
    }

    addFavorite = (e) => {
        if(localStorage.length !== 0){
            let allFavorites = [...this.state.favorites, e.target.innerHTML];
            this.setState({
                favorites: allFavorites
            })
            localStorage.setItem('Favorites', JSON.stringify(allFavorites));
        }
        else{
            let allFavorites2 = [e.target.innerHTML];
            console.log(allFavorites2);
            this.setState({
                favorites: allFavorites2
            })
            localStorage.setItem('Favorites', JSON.stringify(allFavorites2));
        }
    }

    removeFavorite = (name) => {
        if(localStorage.length !== 0){
            let allFavorites = this.state.favorites.filter(favorite => {
                return favorite !== name;
            })
            this.setState({
                favorites: allFavorites
            })
            localStorage.removeItem('Favorites', JSON.stringify(allFavorites));
        }
    }

    render() {
        return (
            <div>
            <Search search={this.handleSearch}/>
            <Weather weather={this.state.Weather} temp={this.state.Temp} description={this.state.WeatherDescription} setFavorite={this.addFavorite}/>
            <WeatherList moreInfo={this.state.MoreInfo}/>
            <Favorites getFavorite={this.getFavorite} favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
            </div>
        )
    }
}

