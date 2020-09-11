import React, { Component } from 'react';
import './App.css';
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
            type="primary"
            onFilterHandler={this.onFilterHandler}
          >
            Filter
          </Button>

          {this.state.showMenu
            ?
            <div className="filterMenu">
              <h2>Game Platforms</h2>
              <input
                    type="text"
                    className="form-control"
                    placeholder="platform"
                    id="platform"
                />
            </div>
            : null
          }

        </header>
        <div className="Continer" >
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
