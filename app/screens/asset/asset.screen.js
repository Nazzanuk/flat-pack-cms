import "./asset.screen.scss";

import {store, view}                                from "react-easy-state";
import {Link}                                       from "react-router-dom";
import {Helmet}                                     from "react-helmet";
import {Component, useState, useEffect, useReducer} from "react";


import ReactDOM from "react-dom";

import LiveStore                            from "stores/live.store";


class AssetScreen extends Component {
    state = {};

    componentDidMount() {
        LiveStore.ChangePage();
    }

    render() {

        return (
            <div data-screen="asset" data-visible={LiveStore.isContentVisible}>

                <div className="flex flex-row asset-header">
                    <h1>My IKEA Articles</h1>
                    <Link className="app-btn" to={'/detail'}>
                        <div className="far fa-plus"/>
                        Create New
                    </Link>

                </div>

                <div className="asset-search">
                    <div className="search-input">
                        <i className="fal fa-search"/>
                        <input type="text" className="" placeholder="Search across all metadata"/>
                    </div>

                </div>

                <div className="asset-search">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="search-input">
                                <select>
                                    <option value="">All Authors</option>
                                </select>
                                <i className="fal fa-angle-down"/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-input">
                                <select>
                                    <option value="">All Dates</option>
                                </select>
                                <i className="fal fa-angle-down"/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-input">
                                <select>
                                    <option value="">All Categories</option>
                                </select>
                                <i className="fal fa-angle-down"/>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="search-input">
                                <select>
                                    <option value="">All Statuses</option>
                                </select>
                                <i className="fal fa-angle-down"/>
                            </div>
                        </div>
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-3">
                            <div className="flex flex-row flex-align">
                                <div style={{marginLeft:"auto"}}/>
                                1-20 of 432 items &nbsp;
                                &nbsp; <i className="fal fa-chevron-left app-btn white"/> &nbsp;
                                &nbsp; <i className="fal fa-chevron-right app-btn white"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="asset-grid">
                    <div className="grid-header">
                        <span>Title</span>
                        <span>Author</span>
                        <span>Date &nbsp;  <i className="fas fa-caret-down"/></span>
                        <span>Categories</span>
                        <span>Tags</span>
                        <span>Featured Image</span>
                        <span>Status</span>
                    </div>

                    {assets.map(asset => (
                        <div className="grid-asset">
                            <span><Link to={'/detail'}>{asset.title}</Link></span>
                            <span><a href="#">{asset.author}</a></span>
                            <span>{asset.date}</span>
                            {/*<span>{asset.categories.map(category => (*/}
                                {/*<><a href="#">&nbsp;{category}</a>,</>*/}
                            {/*))}</span>*/}
                            <span><a href="#">News</a></span>
                            <span>
                                <a href="#">Furniture</a>,&nbsp;
                                <a href="#">Living</a>
                            </span>
                            <span><img src={asset.image}/></span>
                            {asset.status ? (
                                <span><i className="fas fa-circle status-icon published"/> &nbsp; Published</span>
                            ) : (
                                <span><i className="fas fa-circle status-icon"/> &nbsp; Draft</span>
                            )}
                        </div>
                    ))}


                </div>


            </div>
        );
    };
};


export default view(AssetScreen);

var assets = [
    {
        "title": "Living slow on the balcony",
        "author": "Peterson Delacruz",
        "date": "Mon Nov 08",
        "categories": [
            "laborum",
            "sint",
            "nisi",
            "ipsum",
            "aliqua"
        ],
        "tags": [
            "incididunt",
            "exercitation",
            "labore",
            "exercitation",
            "nisi"
        ],
        "image": "https://picsum.photos/300/200?345",
        "status": false
    },
    {
        "title": "Five ways to invite nature into your bedroom",
        "author": "Heather Hammond",
        "date": "Thu Jan 25",
        "categories": [
            "do",
            "irure",
            "sint",
            "aliqua",
            "sit"
        ],
        "tags": [
            "eiusmod",
            "esse",
            "officia",
            "veniam",
            "pariatur"
        ],
        "image": "https://picsum.photos/300/200?3",
        "status": true
    },
    {
        "title": "Rustic coasts trend: sea-inspired blue hues and natural materials",
        "author": "Elvira Gonzalez",
        "date": "Sat Jan 25",
        "categories": [
            "cupidatat",
            "nulla",
            "est",
            "velit",
            "cupidatat"
        ],
        "tags": [
            "eu",
            "sit",
            "mollit",
            "deserunt",
            "magna"
        ],
        "image": "https://picsum.photos/300/200?75",
        "status": true
    },
    {
        "title": "6 ways modern appliances can improve your kitchen",
        "author": "Maxine Merritt",
        "date": "Sun Jul 19",
        "categories": [
            "ut",
            "commodo",
            "duis",
            "adipisicing",
            "eu"
        ],
        "tags": [
            "amet",
            "anim",
            "nostrud",
            "cillum",
            "amet"
        ],
        "image": "https://picsum.photos/300/200?11",
        "status": false
    },
    {
        "title": "Id aliquip dolore officia deserunt aute eu in eu est aliquip ut.",
        "author": "Willa Hess",
        "date": "Mon Dec 25",
        "categories": [
            "officia",
            "nulla",
            "veniam",
            "mollit",
            "excepteur"
        ],
        "tags": [
            "est",
            "tempor",
            "dolore",
            "consequat",
            "exercitation"
        ],
        "image": "https://picsum.photos/300/200?2",
        "status": true
    },
    {
        "title": "Mollit nulla in ullamco veniam incididunt laboris veniam.",
        "author": "Isabella Oconnor",
        "date": "Mon Apr 07",
        "categories": [
            "tempor",
            "mollit",
            "do",
            "ipsum",
            "adipisicing"
        ],
        "tags": [
            "magna",
            "aliquip",
            "in",
            "anim",
            "exercitation"
        ],
        "image": "https://picsum.photos/300/200?10",
        "status": true
    },
    {
        "title": "Exercitation incididunt aliquip cupidatat ut ad minim laboris occaecat.",
        "author": "Sullivan Conrad",
        "date": "Tue May 24",
        "categories": [
            "exercitation",
            "do",
            "cillum",
            "qui",
            "quis"
        ],
        "tags": [
            "eu",
            "enim",
            "in",
            "laboris",
            "et"
        ],
        "image": "https://picsum.photos/300/200?43",
        "status": false
    },
    {
        "title": "Culpa culpa ipsum reprehenderit nostrud dolore adipisicing laborum sunt culpa cillum adipisicing.",
        "author": "Mccarty Luna",
        "date": "Sat Jan 09",
        "categories": [
            "deserunt",
            "ipsum",
            "deserunt",
            "incididunt",
            "nisi"
        ],
        "tags": [
            "adipisicing",
            "consectetur",
            "elit",
            "laboris",
            "nostrud"
        ],
        "image": "https://picsum.photos/300/200?3",
        "status": false
    },
    {
        "title": "Id incididunt aute laboris ipsum cupidatat magna aliquip.",
        "author": "Cote Mcclure",
        "date": "Sat Sep 13",
        "categories": [
            "veniam",
            "consequat",
            "ex",
            "do",
            "sunt"
        ],
        "tags": [
            "duis",
            "cillum",
            "incididunt",
            "dolor",
            "aute"
        ],
        "image": "https://picsum.photos/300/200?0",
        "status": true
    }
]