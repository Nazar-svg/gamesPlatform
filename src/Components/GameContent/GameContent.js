import React, { Component } from 'react';
import classes from './GameContent.module.css';
import axios from 'axios';
import GamePlatform from '../../Container/GamePlatform/GamePlatform';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Button from '../UI/Button/Button';

class GameContent extends Component {
  state = {
    gamesPlatforms: [],
    showMenu: false,
    filterOptions: [],
    initialGamePlatforms: []
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
        const filterOptions = response.data.results.map((item) => {
          return {
            id: item.id,
            platformName: item.name
          }
        })
        this.setState({
          gamesPlatforms: response.data.results,
          initialGamePlatforms: response.data.results,
          filterOptions
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
  onFilterPlatforms = (id) => {
    console.log(id)
    const platform = this.state.initialGamePlatforms.filter(platform => platform.id == id)
    this.setState({
      gamesPlatforms: platform
    })
    console.log(platform)
  }
  onGamePlatformHandler = () => {

  }
  render() {
    return (
      <div>
        <Button
          type="filter"
          className="filter"
          onFilterHandler={this.onFilterHandler}
        >
          Filter
          </Button>
        {this.state.showMenu
          ?
          <Sidebar
            onFilterHandler={this.onFilterHandler}
            filterOptions={this.state.filterOptions}
            onFilterPlatforms={this.onFilterPlatforms}
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
                onGamePlatformHandler={this.onGamePlatformHandler}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default GameContent;