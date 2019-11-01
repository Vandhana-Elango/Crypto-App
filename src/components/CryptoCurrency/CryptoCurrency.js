import React, { Component } from 'react';
import './CryptoCurrency.css';
class CryptoCurrency extends Component {

    render() {
        var {
            id = ["bitcoin", "ethereum", "litecoin"],
            name,
            symbol,
            // date_added
        } = this.props.data;

        var {
            price,
            volume_24h,
            percent_change_1h,
            percent_change_24h,
            percent_change_7d,
            market_cap
        } = this.props.data.quote.USD

        return (
            <div className="Content" id={name} >
                <p className="Content-name"> {name} ({symbol}) </p>
                <h1>${(+price).toFixed(2)}</h1>
                <p>{volume_24h} - 24hr</p>
                <p>{percent_change_1h} - 1hr</p>
                <p>{percent_change_24h} - 24hr</p>
                <p>{percent_change_7d} - 7days</p>
                <p>{market_cap} - Market-cap</p>
            </div>
        );
    }

}

export default CryptoCurrency;