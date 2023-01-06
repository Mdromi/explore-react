import React, { Component } from 'react';

class AboutResult extends Component {
    render() {
        const {totalResults, totalPage, currentPage} = this.props
        return (
            <div className='d-flex justify-content-between'>
                <p className="text-black-50">
                    About {totalResults} Result Found
                </p>
                <p className="text-black-50 ml-auto">
                    {currentPage} Page of {totalPage}
                </p>
            </div>
        );
    }
}

export default AboutResult;
