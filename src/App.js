import React from "react";
import Titles from "./components/Titles";
import Forms from "./components/Forms";
import Weather from "./components/Weather";
import LineChart from "./components/LineChart"

//Sign up and Login to openweatherap.org and get your API_KEY;

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    forecast: undefined,
    t_min: 0,
    t_max: 40,
    error: undefined
  }
  
  getWeather = async(e) => {
    try{
      e.preventDefault();//Prevent default behavior (not refresh)
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call_current = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
      const api_call_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}`);	  
	
      const data_current = await api_call_current.json();
      const data_forecast = await api_call_forecast.json();
      var chart_data = [];
      var t_min,t_max;
	  
      if(city && country){
		    for (var i = 0; i < data_forecast.list.length; i++) {
			    chart_data.push({x:i+1,y:parseFloat((data_forecast.list[i].main.temp-273).toFixed(2))});//transform to celsius w/ 2 precision digits
		    }
        //find the minimum and maximum values of temperature to build y scale chart
        t_min = chart_data.reduce((min, b) => Math.min(min, b.y), chart_data[0].y);
        t_max = chart_data.reduce((max, b) => Math.max(max, b.y), chart_data[0].y);
        
        this.setState({
              temperature: data_current.main.temp,
              city: data_current.name,
              country: data_current.sys.country,
              humidity: data_current.main.humidity,
              description: data_current.weather[0].description,
              forecast: chart_data,
          t_min: t_min,
          t_max: t_max,
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
          forecast: undefined,
          t_min: 0,
          t_max: 40,
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
      <div className="column">
        <div className="panel-header">
          <Titles />
        </div>
        <div className="form-control">
          <Forms getWeather={this.getWeather}/>
        </div>
        <div className="panel-body">
          <div className="info">
            <Weather temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>			
        <LineChart t_min={this.state.t_min}
          t_max={this.state.t_max}
          forecast={this.state.forecast}
          city={this.state.city}
        />
        <div className="footer">
          <div className="copyright">
            <span>© Copyright&nbsp;
              <a href="https://patriciadourado.com" target="_blank" rel="noopener noreferrer">
                Patricia Dourado&nbsp;
              </a> 
              2019.
            </span>  
          </div>		                  
        </div>  
      </div>
    );
  }
}

export default App;