import React, { Component } from 'react';
import classes from './GameContent.module.css';
import axios from 'axios';
import GamePlatform from '../../Container/GamePlatform/GamePlatform';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Container/Header/Header';

class GameContent extends Component {
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
        console.log('Brrrr')
        this.setState({
          showMenu: !this.state.showMenu
        })
      }
    render() {
          return (
      <div>
        <Header
          onFilterHandler={this.onFilterHandler}
        />
        {this.state.showMenu
          ?
          <Sidebar
            onFilterHandler={this.onFilterHandler}
          />
          : null
        }
          <div className={classes.GameContent}>
            {this.state.gamesPlatforms.map((item, id) => {
              return (
                <GamePlatform
                  key={id}
                  name={item.name}
                  games_count={item.games_count}
                  image_background={item.image_background}
                />
              )
            })}
          </div>
      </div>
    );
    }
}

export default GameContent;