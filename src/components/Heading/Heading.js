import React, {Component} from 'react';
import './heading.css';

export default class Heading extends Component{
    render(){
        return(
            <div className="heading">
                <h2><strong className="cash">CA$H</strong> FOR JUNK CARS, VANS & TRUCKS</h2>
                <a className="app-badge" href='https://play.google.com/store/apps/details?id=com.tatrucking4junk.tatrucking4junk&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className="badge" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
            </div>
        )
    }
}