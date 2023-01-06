import React, { Component } from "react";

import {newsCategory} from "../../news/index";

class Header extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.props.search(this.state.searchTerm)
  };

  render() {
    const { category, changeCategory } = this.props;

    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headline
        </h1>
        <input
          type="text"
          className="form-control"
          placeholder="Type Anything & Press Enter To Search.."
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => (
              <button
                key={newsCategory[item]}
                onClick={() => changeCategory(newsCategory[item])}
                className={`btn btn-sm  mr-2 mb-2 ${
                  category === newsCategory[item] ? "btn-warning" : "btn-light"
                }`}
              >
                {`#${newsCategory[item]}`}
              </button>
            ))}
        </div>
      </div>
    );
  }
}

export default Header;

// if (category === newsCategory[item]) {
//     return (
//       <button className="btn btn-sm btn-warning mr-2 mb-2">
//         {`#${newsCategory[item]}`}
//       </button>
//     );
//   }
//   return (
//     <button className="btn btn-sm btn-light mr-2 mb-2">
//       {`#${newsCategory[item]}`}
//     </button>
//   );
