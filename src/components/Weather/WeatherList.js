import React from 'react'
 
export default class WeatherList extends React.Component{
    render(){
        const only5 = (arr, eight) => arr.filter((e,i) => i % eight === eight - 1)
        const weatherArray =only5(this.props.moreInfo,8);
        var count = 0;

        const weatherList = weatherArray.map(weather => {
                let icon = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
                count++;
                return(
                <div className="row" key={count}>
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title orange-text">{weather.dt_txt.slice(5, -9)}</span>
                            <p>Om {count} {count === 1 ? "dag" : "dagar" }  </p>
                            <img alt="" src={icon} />
                            <p>{weather.wind.speed} m/s</p>
                            <p>{weather.weather.description }</p>
                            <p>
                                <span>Max: {weather.main.temp_max} °C</span>
                                <br/>
                                <span>Min: {weather.main.temp_min} °C</span>
                            </p>
                        </div>
                    </div>
                </div>
                )
            })
            return(
                <div className="valign-wrapper center">
                    {weatherList}
                </div>
            )
    }
}