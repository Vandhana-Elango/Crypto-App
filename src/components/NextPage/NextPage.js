import React from 'react';
import { Link } from 'react-router-dom';
import '../UI/Button/Button.css';

class NextPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coinNames: [
                'Binance',
                'KuCoin',
                'Changelly',
                'Coinbase',
                'CEX.io',
                'BitMex',
                'Bitfinex'
            ]
        }
    }

    handleClick = (coinName) => {
        // this.props.history.push(`/NextPage/${coinName}`)
        window.open(`https://www.google.com/search?q=${coinName}`, "_blank")
    }

    render() {
        return (
            <div>
                <div className="Button">
                    <Link to={{
                        pathname: '/',
                    }}>Back</Link>
                </div>
                <h2 className="title-style">{this.state.coinNames.length} Best Crypto Trading Websites for Beginners</h2>

                <ul>
                    {
                        this.state.coinNames.map((coinName, index) => {
                            return (
                                // <Link to={`/NextPage/${coinName}`}>
                                <button onClick={() => {
                                    this.handleClick(coinName)
                                }} className={"Button-list"} key="index">{coinName}</button>
                                // </Link>
                            )

                        })
                    }
                </ul>

            </div>
        );
    }
};
export default NextPage;
