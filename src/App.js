import React, { Component } from 'react';
import './App.css';
import GamePlatform from './Container/GamePlatform/GamePlatform';
import logo from './imagen/joystick.svg';
import Button from './Components/UI/Button';
import axios from 'axios';

class App extends Component {
  state = {
    gamesPlatforms: [],
    showMenu: false
  }

  componentDidMount() {
    axios.get("https://rawg-video-games-database.p.rapidapi.com/platforms", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": "31deb55dd5msh51935b29dfd8dfcp1a7b6cjsn343f66c99125"
      }
    })
      .then(response => {
        this.setState({
          gamesPlatforms: response.data.results
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
  onFilterHandler = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="Logo">
            <img src={logo} alt="logo" />
          </div>
          <Button
            type="filter"
            className="filter"
            onFilterHandler={this.onFilterHandler}
          >
            Filter
          </Button>

          {this.state.showMenu
            ?
            <div className="filterMenu">
              <div onClick={this.onFilterHandler} >
                <span className="burger"></span>
                <span className="burger"></span>
                <span className="burger"></span>
              </div>

              <h2>Game Platforms</h2>
              <select className="Select">
                <option value="value1">Значение 1</option>
                <option value="value2" selected>Значение 2</option>
                <option value="value3">Значение 3</option>
              </select>
              <Button
                type="apply"
              >
                Apply
          </Button>
            </div>
            : null
          }

        </header>
        <div className="Continer" >
          <div className="inner">
            {this.state.gamesPlatforms.map((item, id) => {
              return (
                <GamePlatform 
                  key={item.id} 
                  name={item.name}
                  games_count={item.games_count}
                  image_background={item.image_background}
                />
              )
            })}
          </div>
        </div>

      </div>
    );
  }
}


export default App;
