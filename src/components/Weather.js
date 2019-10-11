/*
    This component returns a table with all props from weather api:
    location, city, country, temperature, description and also a message error;
*/
import React from "react";


class Weather extends React.Component{
    render(){
        return(
            <div className="info-weather">
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>City</th>
								<th>Country</th>
								<th>Temperature</th>
								<th>Humidity</th>
								<th>Condition</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								{this.props.city && <td>{this.props.city}</td>}
								{this.props.country && <td>{this.props.country}</td>}
								{this.props.temperature && <td>{this.props.temperature} &#8451;</td>}
								{this.props.humidity && <td>{this.props.humidity}</td>}
								{this.props.description && <td>{this.props.description}</td>}
							</tr>
						</tbody>
					</table>
				</div>
                <div className="error-message">
                    {this.props.error && <p>{this.props.error}</p>}
                </div>
            </div>
        );
    }
}

export default Weather;

