import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                <h3>I am {this.props.name}</h3>
            </div>
        );
    }
}

PureComp.propTypes = {

};

export default PureComp;