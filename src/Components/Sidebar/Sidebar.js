import React, { Component } from 'react';
import classes from './Sidebar.module.css'
import Button from '../../Components/UI/Button/Button';

class Sidebar extends Component {
    state = {
        option: null,
        onClear: false
    }
    onClearFilterHandler = () => {
        console.log("nbbgvvcvc",this.state.option)
        this.setState({
            option: null
        })
        console.log("nbbg",this.state.option)
    }
    onApplyFilterHandler = () => { 
        this.props.onFilterPlatforms(this.state.option.id)
        this.setState({
            onClear: true,
            option: null,
        })
        console.log(this.state.option)
    }
    onHandleSelect = (event) => {
        this.setState({
            option: { id: event.target.value },
        })
    }
    render() {
        return (
            <div className={classes.Sidebar}>
                <div onClick={this.props.onFilterHandler} className={classes.Burger}>
                    <span className={classes.BurgerItem}></span>
                    <span className={classes.BurgerItem}></span>
                    <span className={classes.BurgerItem}></span>
                </div>
                <h2>Game Platforms</h2>
                <select className={classes.Select}  onChange={this.onHandleSelect}>
                    <option value={this.state.option}>....</option>
                    {this.props.filterOptions.map((option) => {
                        return <option
                            value={option.id}
                            key={option.id}
                        >
                            {option.platformName}
                        </option>
                    })}
                </select>
                <div className={classes.butonGroup}>
                    <div onClick={this.onClearFilterHandler}>
                        <Button
                            type="primary"
                            disabled={!this.state.onClear}
                        >
                            Clear
                </Button>
                    </div>
                    <div onClick={this.onApplyFilterHandler}>
                        <Button
                            type="primary"
                            disabled={!this.state.option}
                        >
                            Apply
                </Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Sidebar;