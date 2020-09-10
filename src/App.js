import React, { Component } from 'react';
import './App.css';
import logo from './imagen/joystick.svg';
import axios from 'axios';

class App extends Component {
  state = {
    gamesPlatforms: []
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
        console.log(this.state.gamesPlatforms)
        this.setState({
          gamesPlatforms: response.data.results
        })
        console.log(this.state.gamesPlatforms)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="Logo">
            <img src={logo} alt="logo" />
          </div>
        </header>
        <div className="Container" >
          <div className="inner">
            {this.state.gamesPlatforms.map((item, id) => {
              return (
                <div className="item" key={item.id}>
                  <span className='title'>
                    <span className='name'>{item.name}</span>
                    <span><strong>Count:</strong><span className="count">{item.games_count}</span></span>
                  </span>
                  <div className='itemConteiner'>
                    <img src={item.image_background} alt="baner" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
