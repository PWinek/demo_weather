import React, { Component } from 'react';
import Form from '../Form/Form';
import Result from '../Result/Result';

const APIKey = '9bf1ba0a09bfbd18703d9bbcc4b944f0';

class App extends Component {

  state = {
    value: '',
    temp_today: '',
    temp_tommorrow: '',
    humidity_today: '',
    humidity_tommorrow: '',
    wind_today: '',
    wind_tommorrow: '',
    err:'',
    icon_today:'',
    icon_tommorrow:''
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${APIKey}&units=metric`;
    
    fetch(API)
    .then(response => {
      if (response.ok){
        return response
      }
      throw Error("Nie wszedł")
    })
    .then(response => response.json())
    .then(data => {
      this.setState(state =>({
        err: false,
        temp_today: data.list[0].main.temp,
        temp_tommorrow: data.list[8].main.temp,
        humidity_today: data.list[0].main.humidity,
        humidity_tommorrow: data.list[8].main.humidity,
        wind_today: data.list[0].wind.speed,
        wind_tommorrow: data.list[8].wind.speed,
        city: state.value,
        icon_today: data.list[0].weather[0].icon,
        icon_tommorrow: data.list[8].weather[0].icon
      }))
    })
    .catch(err => {
      this.setState(state =>({
        err: true,
        city: state.value
      }))
    })
  }
  
  render() {
    return (

      <div class="container">
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit}/>
        <Result weather={this.state}/>
      </div>

    );
  }  
}

export default App;
