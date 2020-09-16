import React, { Component } from 'react';
import classes from './Sidebar.module.css'
import Button from '../../Components/UI/Button/Button';

class Sidebar extends Component {
    state = {
        option: null
    }
    onApplyFilterHandler = (onClear = false) => {
        console.log(onClear)
        this.props.onFilterPlatforms(this.state.option.id)
        if(onClear){
            this.setState({
                option: null
            })
        }
        console.log(this.state.option)
    }
    onHandleSelect = (event) => {
        this.setState({
            option: { id: event.target.value }
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
                <select className={classes.Select} onChange={this.onHandleSelect}>
                    <option value={null}>....</option>
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
                {/* <div onClick={() => this.onApplyFilterHandler(true)}>
                    <Button
                        disabled={!this.state.option}
                    >
                       Clear
                </Button>
                </div> */}
                <div onClick={this.onApplyFilterHandler}>
                    <Button
                        disabled={!this.state.option}
                        type="apply"
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