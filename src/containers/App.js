import React, { Component } from 'react';
import './App.css';
import Landing from '../components/Landing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  fetchWeatherData() {
    fetch(`http://api.openweathermap.org/data/2.5/group?id=1609350,2643743,6455259,1880252,5128638&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}

export default App;
