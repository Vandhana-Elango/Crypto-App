import React from 'react'


class DynamicComponent extends React.Component {

    render(){
        return(
                <p>Hi {this.props.match.params.coinName}</p>
        )
    }
}

export default DynamicComponent