import React from 'react';
import classes from './GamePlatform.module.css'

const GamePlatform = props => {
    return (
        <div className={classes.GamePlatform} >
            <span className={classes.Title}>
                <span className={classes.Name}>{props.name}</span>
                <span><strong>Count:</strong><span className={classes.Name}>{props.games_count}</span></span>
            </span>
            <div className={classes.itemConteiner}>
                <img src={props.image_background} alt="baner" />
            </div>
        </div>
    )
}

export default GamePlatform;