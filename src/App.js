import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";

//Sign up and Login to openweatherap.org and get your own API_KEY;

const API_KEY = "01c331b462cd6dfb2abd515dffd14055";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async(e) => {
    try{
      e.preventDefault();//Prevent default behavior (not refresh)
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
      const data = await api_call.json();
        
      if(city && country){
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      }
      else{
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the value."
        });     
      }
    }
    catch(e) {
    console.log('error: ', e);  
    }
  }
  render(){
    return (
      <div>
        <div className="panel-header">
          <Titles />
        </div>
		<div className="row">
			<div className="form-control">
				<div className="col-xs-5">
				  <Forms getWeather={this.getWeather}/>
				</div>
			</div>
		</div>
        <div className="panel-body">
          <Weather temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
          </div>
      </div>
    );
  }
}

export default App;
