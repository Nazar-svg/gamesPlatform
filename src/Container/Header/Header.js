import React from 'react';
import classes from './Header.module.css'
import logo from '../../imagen/joystick.svg'
import Button from '../../Components/UI/Button/Button';

const GamePlatform = props => {
    return (
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <img src={logo} alt="logo" />
            </div>
            <Button
                type="filter"
                className="filter"
                onFilterHandler={props.onFilterHandler}
            >
                Filter
          </Button>
        </header>
    )
}

export default GamePlatform;