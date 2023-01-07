import React, { Component } from "react";

class AboutResult extends Component {
  aboutResult = React.createRef();

  componentDidMount() {
    // console.log(this.aboutResult.current);
    (()=>this.props.goToTop(this.aboutResult.current.scrollTop))
  }

    callGoToTop = () => {
      return this.aboutResult.current
    }

  render() {
    const { totalResults, totalPage, currentPage, goToTop } = this.props;
    return (
      <div
        ref={this.aboutResult}
        className="d-flex justify-content-between"
      >
        <p className="text-black-50">About {totalResults} Result Found</p>
        <p className="text-black-50 ml-auto">
          {currentPage} Page of {totalPage}
        </p>
      </div>
    );
  }
}

export default AboutResult;
