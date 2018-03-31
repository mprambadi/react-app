import React, {Component} from 'react'
import Title from './component/Title'
import WeatherInput from './component/WetherInput'
import Weather from './component/Weather'

const API_KEY = `9fc5af0d3cdfaf3869ccf04585aca733`
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature : undefined,
      city : undefined,
      country : undefined,
      humidity : undefined,
      description : undefined,
      error : undefined
    }
  }
  getWeather = async (e) => {

    e.preventDefault();
    
    let {city, country} = e.target.elements

    if(city.value && country.value) { 
    const fetchWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&appid=${API_KEY}&units=metric`);
    const data = await fetchWeather.json();
      let {humidity,pressure,temp} = data.main
      let {name} = data
      let [desc] = data.weather
        this.setState({
          temperature: temp,
          humidity,
          pressure,
          country : data.sys.country,
          city: name,
          description: desc.description,
          error: ""
        })
    }
    this.setState({
      error: "please enter value"
    })
  }

  render(){
    return (
      <div> 
        <Title />
        <WeatherInput getWeather={this.getWeather}/>
        <Weather data={this.state}/>
      </div>
    );
  }
}

export default App