import React from 'react'

const Weather = (props) => {
    let {city, country, description, humidity,  temperature, error} = props.data
    if(city && country && description && humidity && temperature !== undefined){
        return (
            <div className="weather__info"> 
                <p className="weather__key">Location    :   <span className="weather__value">{city}, {country}</span></p>
                <p className="weather__key">humidity    :   <span className="weather__value">{humidity}</span></p>
                <p className="weather__key">Temperature :   <span className="weather__value">{temperature}</span></p>
                <p className="weather__key">Condition   :   <span className="weather__value">{description.toUpperCase()}</span></p>
            </div>
        )
    } return (
        <p> {error} </p>
    )
}

export default Weather