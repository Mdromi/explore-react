import React, { Component } from 'react';
import newsCategory from "../../news/index";

import Header from './header'
import NewsList from './newsList'
import Pagination from './pagination'
import AboutResult from './about-result'
import Loading from './loading'

const fakeNews = [
    {
        title: 'Title',
        content: 'Content',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        UrlToImage: 'https://jsonplaceholder.typicode.com/posts/',
        publishedAt: 'publish date and time',
        source: {
            name: 'CDN'
        }
    },
    {
        title: 'Title 2',
        content: 'Content',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        UrlToImage: 'https://jsonplaceholder.typicode.com/posts/',
        publishedAt: 'publish date and time',
        source: {
            name: 'CDN'
        }
    }
]

class ClassCompApp extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header category={newsCategory.technology}/>
                        <AboutResult />
                        <NewsList news={fakeNews}/>
                        <Pagination />
                        <Loading />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCompApp;
