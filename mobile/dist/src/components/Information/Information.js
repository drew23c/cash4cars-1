import React, {Component} from 'react';
import './information.css';
import towtruckIcon from '../pics/towtruckIcon.jpg';
import cash from '../pics/cash.png';
import phoneIcon from '../pics/phone.png';

export default class Information extends Component{
    render(){
        return(
            <div className="information">
                <h2>We buy junk cars, vans, trucks, SUVs, forklifts in all 5 boroughs</h2>
                <h3>Want to junk your car, van truck SUV, forklift?</h3>
                <div>
                <ul>
                    <li><a href="tel:9178625466"><img className="cash-image" src={phoneIcon} style={{height:'15%', width:'15%'}} /></a></li>
                    <li><p>Get a fast offer 24/7</p></li>
                    <li><img className="cash-image" src={towtruckIcon} style={{height:'15%', width:'15%'}} /></li>
                    <li><p>Get a <b>FREE</b> tow. Absolutely <b>FREE</b> pickup included.</p></li>
                    <li><img className="cash-image" src={cash} style={{height:'15%', width:'15%'}} /></li>
                    <li><p>Get paid immediately, you get paid on the spot!</p></li>
                </ul>
                <h3>Have any questions? <strong className="call">Call 24/7 (917) 862-5466</strong></h3>
                </div>
                <div className="We-buy">
                <p>{`We buy junk cars for cash in the entire New York area. 
                    Sell your used or unwanted cars, trucks, SUVs, or vans and 
                    get paid on the spot. We don't just buy junk vehicles! We buy 
                    ANY condition vehicle with or without a title or keys.`}</p>
                <p>Lost keys, no problem.</p>
                </div>
            </div>
        )
    }
}