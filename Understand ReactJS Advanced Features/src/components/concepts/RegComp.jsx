import React, { Component } from 'react';

class RegComp extends Component {
    render() {
        return (
            <div>
                <h3>I am {this.props.name}</h3>
            </div>
        );
    }
}

export default RegComp;