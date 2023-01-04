import React, { Component } from 'react';

class AboutResult extends Component {
    render() {
        return (
            <div className='d-flex justify-content-between'>
                <p className="text-black-50">
                    About {0} Result Found
                </p>
                <p className="text-black-50 ml-auto">
                    {1} Page of {100}
                </p>
            </div>
        );
    }
}

export default AboutResult;
