import React, {Component} from 'react';
import './footer.css';
import phone from '../pics/baseline-phone-24px.svg';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <ul className="footer-list">
                <li>TA Trucking</li>
                <li>Click to call <a href="tel:9178625466"><img src={phone} style={{filter:'invert(100%)'}} /></a></li>
                {/* <li><a href="https://www.facebook.com/bluecanvascreative/" target="_blank">Designed by Blue Canvas Creative</a></li> */}
                </ul>
            </div>
        )
    }
}