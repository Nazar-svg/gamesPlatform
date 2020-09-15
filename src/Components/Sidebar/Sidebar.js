import React from 'react';
import classes from './Sidebar.module.css'
import Button from '../../Components/UI/Button/Button';

const Sidebar = props => {
    return (
        <div className={classes.Sidebar}>
            <div onClick={props.onFilterHandler} >
                <span className={classes.Burger}></span>
                <span className={classes.Burger}></span>
                <span className={classes.Burger}></span>
            </div>
            <h2>Game Platforms</h2>
            <select className={classes.Select}>
                <option value={classes.value1}>Значение 1</option>
                <option value={classes.value2}>Значение 2</option>
                <option value={classes.value2}>Значение 3</option>
            </select>
            <Button
                type="apply"
            >
                Apply
            </Button>
        </div>
    )
}

export default Sidebar;