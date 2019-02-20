import React, { Component } from 'react'

import SearchForm from '../../components/SearchForm/SearchForm';

import './Home.scss';
import SinglePost from '../../components/SinglePost/SinglePost';

class Home extends Component {

    state = {
        posts: [
            { title: 'title 1', body: 'body' },
            { title: 'title 2', body: 'body' },
            { title: 'title 3', body: 'body' }
        ],
        searchKey: '',
        results: []
    }

    searchHandler = (e) => {
        this.setState({
            searchKey: e.target.value
        })

        let searchresult = this.state.posts.filter(post => post.title.toUpperCase().match(this.state.searchKey.toUpperCase()))

        this.setState({
            results: searchresult
        })
        console.log('searchKey: ' + this.state.searchKey);
        console.log('search result: ' + searchresult);
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    render() {

        let { searchKey, posts, results } = this.state;

        return (
            <div className="container">
                <div className="filter">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <p>Paid User</p>
                        </div>
                        <div className="col-lg-4">
                            <SearchForm
                                searchHandler={this.searchHandler.bind(this)}
                                searchKey={searchKey}
                                submitHandler={this.submitHandler.bind(this)}
                            />
                        </div>
                    </div>
                </div>
                <div className="blog-list">
                    <h4 className="text-danger">Search Result</h4>
                    <div className="row">
                        {
                            results.map((post, index) => {
                                return (
                                    <SinglePost key={index} post={post} />
                                )
                            })
                        }
                    </div>
                    <hr />
                </div>
                {/* <div className="blog-list">
                    <div className="row">
                        {
                            posts.map((post, index) => {
                                return (
                                    <SinglePost key={index} post={post} />
                                )
                            })
                        }
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Home;