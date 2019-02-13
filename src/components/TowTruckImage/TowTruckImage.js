import React,{Component} from 'react';
import './towtruckimage.css';
import towtruck from '../pics/towtruck.jpg';

export default class TowTruckImage extends Component{
    render(){
        return(
            <div className="towtruck-image">
                <h1>TA Trucking</h1>
                <strong className="heading-call">Call 24/7<br/> <a href="tel:9178625466">917-862-5466</a></strong>
                <img src={towtruck} />
            </div>
        )
    }
}