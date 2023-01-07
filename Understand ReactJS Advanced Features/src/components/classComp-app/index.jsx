import React, { Component, createRef } from "react";
import News, { newsCategory } from "../../news/index";

import AboutResult from "./about-result";
import Header from "./header";
import Loading from "./loading";
import NewsList from "./newsList";
import Pagination from "./pagination";

const news = new News(newsCategory.technology);

class ClassCompApp extends Component {
  state = {
    data: {},
    isLoading: true,
  };

  searchRef = createRef();
  itemRefList = [];

  componentDidMount() {
    news
      .getNews()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        this.setState({ isLoading: false });
        alert("Something want wrong");
      });

    this.searchRef.current.focus();

    console.log("itemRefList = ", this.itemRefList);
  }

  next = () => {
    if (this.state.data.isNext) this.setState({ isLoading: true });
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something want wrong");
        this.setState({ isLoading: false });
      });
  };

  prev = () => {
    if (this.state.data.isPrevious) this.setState({ isLoading: true });
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something want wrong");
        this.setState({ isLoading: false });
      });
  };

  handlePageChange = (value) => {
    this.setState({
      data: {
        ...this.state.data,
        currentPage: Number.parseInt(value),
      },
    });
  };

  goToPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something want wrong Go to page");
        this.setState({ isLoading: false });
      });
  };

  changeCategory = (category) => {
    this.setState({ isLoading: true });
    news
      .changeCategory(category)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something want wrong update category");
        this.setState({ isLoading: false });
      });
  };

  search = (searchTerm) => {
    this.setState({ isLoading: true });
    news
      .search(searchTerm)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Something want wrong search category");
        this.setState({ isLoading: false });
      });
  };

  goToTop(scrollRef) {
    return window.scroll(0, scrollRef);
  }

  render() {
    const {
      article,
      isNext,
      isPrevious,
      totalPage,
      currentPage,
      category,
      totalResults,
    } = this.state.data;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header
              category={category}
              changeCategory={this.changeCategory}
              search={this.search}
              ref={this.searchRef}
            />
            <AboutResult
              totalResults={totalResults}
              currentPage={currentPage}
              totalPage={totalPage}
              goToTop={this.goToTop}
            />
            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList news={article} ref={this.itemRefList} />
                <Pagination
                  next={this.next}
                  prev={this.prev}
                  isPrevious={isPrevious}
                  isNext={isNext}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  handlePageChange={this.handlePageChange}
                  goToPage={this.goToPage}
                />
                <button
                  onClick={() => this.goToTop()}
                  className="btn btn-secondary my-"
                >
                  Go To Top
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ClassCompApp;
