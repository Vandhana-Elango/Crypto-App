import React, { Component } from 'react';
import axios from 'axios';
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency';
import './Listing.css';
import '../UI/Button/Button.css';
import { getCryptoDataApiCallAction } from '../../store/actions/listingAction'
import { connect } from 'react-redux'


class Listing extends Component {

    onClick = () => this.props.history.push("/NextPage");

    componentDidMount() {
        this.props.dispatch(getCryptoDataApiCallAction())
    }

    render() {
        return (
            <div className="listings-containers">
                <ul className="list">
                    {
                        this.props.listingData ? this.props.listingData.map((currency) =>
                            <CryptoCurrency data={currency} key={currency.id} />
                        ) : 'Loading data... Please wait'
                    }

                </ul>

                <button className="next-Button" Type="button"
                    onClick={this.onClick}>Next Page</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        listingData: state.listingReducer
    })
}

export default connect(mapStateToProps)(Listing);