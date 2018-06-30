import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from '../components/Landing';
import View from '../components/cities/View';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      cities: [],
      currentCity: {},
      error: false
    }
    this.getCurrentCity = this.getCurrentCity.bind(this);
  }

  fetchWeatherData() {
    fetch(`http://api.openweathermap.org/data/2.5/group?id=1609350,2643743,6455259,1880252,5128638&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
    .then(resp => resp.json())
    .then(data => this.setState({cities: data.list}))
    .catch(err => this.setState({error: true}));
  }

  getCurrentCity(name) {
    const index = this.state.cities.findIndex(city => city.name.toLocaleLowerCase().replace(' ', '-') === name);
    return this.state.cities[index];
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={() => (<Landing cities={this.state.cities}/>)}
          />
          <Route 
            path="/:id"
            render={(props) => (
              <View 
                city={this.getCurrentCity(props.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
