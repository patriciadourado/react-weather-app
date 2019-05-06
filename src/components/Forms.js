/*
    This form component has access getWeather method on App.js and get access through the inputs:
    city and country of the object (data) from the API;
*/

import React from "react";

class Forms extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country (ex. BR)"/>
                <button className="btn-primary"> Know Weather</button>
            </form>
        );
    }

}
export default Forms;