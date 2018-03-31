import React from 'react'

const WeahterInput = (props) => {
    return (
        <div> 
            <form onSubmit={props.getWeather}>
                <div>
                    <input type="text" name="city" />
                    <input type="text" name="country" />
                    <button> Get Weather </button>
                </div>
            </form>
        </div>
    )
}

export default WeahterInput