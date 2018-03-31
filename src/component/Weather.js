import React from 'react'

const Weather = (props) => {
    let {city, country, description, humidity,  temperature, error} = props.data
    if(city && country && description && humidity && temperature !== undefined){
        return (
            <div> 
                <p>Location    :   {city}, {country}</p>
                <p>humidity    :   {humidity}</p>
                <p>Temperature :   {temperature}</p>
                <p>Condition   :   {description}</p>
            </div>
        )
    } return (
        <p> {error} </p>
    )
}

export default Weather