import React from 'react';
import classes from './Header.module.css'
import logo from '../../imagen/joystick.svg'

const GamePlatform = props => {
    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}

export default GamePlatform;