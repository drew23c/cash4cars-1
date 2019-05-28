import React, {Component} from 'react';
import './badge.css';

export default class Badge extends Component{

    render(){
        return(
            <div className="Badge">
                <h3>Developed by <a href="https://www.andrewcaldwell.site" target="_blank">Andrew Caldwell</a> of</h3>
                <a href="https://www.facebook.com/bluecanvascreative/?ref=bookmarks" target="_blank"><h3>Blue Canvas Creative</h3></a>
            </div>
        )
    }
}