import "./detail.screen.scss";

import {store, view}                                from "react-easy-state";
import {Link}                                       from "react-router-dom";
import {Helmet}                                     from "react-helmet";
import {Component, useState, useEffect, useReducer} from "react";
import * as trumbowyg                               from "trumbowyg";


import ReactDOM from "react-dom";


import LiveStore                            from "stores/live.store";


class DetailScreen extends Component {
    state = {};

    componentDidMount() {
        LiveStore.ShowPage();

        $.trumbowyg.svgPath = "/static/lib/icons.svg";
        $("#trumbowyg-demo").trumbowyg();
        $("#trumbowyg-demo").trumbowyg("html", `<h3>Let nature become one with your bed</h3><p>Climbing plants make great bedside companions. They add a fresh air and can easily be made to mesh with most irregular forms. Like this tubing headboard, that lets you blur the lines between ivy and bed altogether.</p>`);

    }

    componentDidUpdate(prevProps) {
        LiveStore.ShowPage();
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.init();
        }
    }

    render() {

        return (
            <div data-screen="detail" data-visible={LiveStore.isContentVisible}>

                <div className="flex flex-row detail-header">
                    <h1>Edit Article</h1>
                    <div className="app-btn white">
                        <div className="far fa-plus"/>
                        Create New
                    </div>
                    <div style={{margin: "auto"}}/>
                    <div className="app-btn white">
                        <div className="far fa-copy"/>
                        Clone
                    </div>
                    <div className="app-btn primary">
                        <div className="far fa-save"/>
                        Save Changes
                    </div>
                </div>


                <div className="app-tabs">
                    <div className="app-tab active">Content</div>
                    <div className="app-tab">Metadata</div>
                    <div className="app-tab">History</div>
                    {/*<div className="app-tab">Workflow</div>*/}
                </div>


                <div className="row">
                    <div className="col-sm-9">
                        <div className="app-field">
                            <div className="field-label">
                                Title
                                <i className="fas fa-question field-question">
                                    <div className="question-tip">
                                        <img src="/static/img/title.png" alt=""/>
                                    </div>
                                </i>

                            </div>
                            <div className="field-input">
                                <input type="text" defaultValue="Living slow on the balcony"/>
                            </div>
                        </div>

                        <div className="app-field">
                            <div className="field-label">Pretty URL <i className="fas fa-question field-question"/>
                            </div>
                            <div className="field-input">
                                <input type="text" defaultValue="living-slow-on-the-balcony"/>
                            </div>
                        </div>

                        <div className="app-field">
                            <div className="field-label">
                                Featured Image
                                <i className="fas fa-question field-question">
                                    <div className="question-tip">
                                        <img src="/static/img/featured-image.png" alt=""/>
                                    </div>
                                </i>
                            </div>
                            <img className="field-img" src="https://picsum.photos/300/200?34"/>
                        </div>

                        <div className="app-field">
                            <div className="field-label">
                                Summary
                                <i className="fas fa-question field-question">

                                    <div className="question-tip">
                                        <img src="/static/img/summary.png" alt=""/>
                                    </div>
                                </i>
                            </div>
                            <div className="field-input">
                                <textarea defaultValue={`Make the most of your summer by bringing activities down to a minimum. Customise your balcony to suit your favourite pastime, enjoyed at an expressly relaxed pace.`}
                                />
                            </div>
                        </div>

                        <div className="app-field">
                            <div className="field-label">Tags <i className="fas fa-question field-question"/></div>
                            <div className="field-btns flex flex-row">
                                <div className="app-btn btn-small primary">Furniture</div>
                                <div className="app-btn btn-small primary">Living</div>
                                <i className="fal fa-plus app-btn btn-small white"/>
                            </div>

                        </div>

                        <div className="app-field">
                            <div className="field-label">Content <i className="fas fa-question field-question"/></div>
                            {/*<div className="field-input">*/}
                            {/*<input type="text" value="hello"/>*/}
                            {/*</div>*/}

                            <div id="trumbowyg-demo"></div>


                        </div>

                        <br/>

                        <div className="app-btn primary">
                            <div className="far fa-save"/>
                            Save Changes
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <div className="app-widget">
                            <div className="widget-header">Preview Content</div>
                            <div className="widget-content">
                                <div className="flex flex-row">
                                    <div className="app-btn btn-small primary">
                                        <i className="far fa-file"/> Preview Article
                                    </div>
                                    <div style={{margin: "auto"}}/>
                                    <div className="app-btn btn-small primary"><i className="far fa-code"/> Preview JSON
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="app-widget">
                            <div className="widget-header">Workflow</div>

                            <div className="widget-content">
                                <div>

                                    <strong>Status:</strong> Draft
                                </div>
                                <div>
                                    Published on: 05 April 2019 @ 10:49
                                </div>
                            </div>
                            <div className="widget-content">
                                <div className="flex flex-row">
                                    <div className="app-btn btn-small"><i className="far fa-check"/> Approve</div>
                                    <div style={{margin: "auto"}}/>
                                    <div className="app-btn btn-small white"><i className="far fa-repeat"/> Compare to Live
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-widget">
                            <div className="widget-header">Author</div>

                            <div className="widget-content">
                                <div className="app-field" style={{margin:"10px 0 0"}}>
                                    {/*<div className="field-label">Author <i className="fas fa-question field-question"/>*/}
                                    {/*</div>*/}
                                    <div className="field-input">
                                        <select name="" id="">
                                            <option value="">Nathan Nelson</option>
                                        </select>
                                        <i className="fal fa-chevron-down"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-widget">
                            <div className="widget-header">Analytics</div>

                            <div className="widget-content">
                                <div className="simple-grid">
                                    <strong>Pageviews</strong>
                                    <div>6095</div>

                                    <strong>Unique Pageviews</strong>
                                    <div>4083</div>

                                    <strong>Avg. Time on Page</strong>
                                    <div>0:01:28</div>

                                    <strong>Bounce Rate</strong>
                                    <div>33%</div>

                                    <strong>Exit Rate</strong>
                                    <div>63%</div>
                                </div>
                            </div>
                            <div className="widget-content">
                                <div className="app-btn btn-small primary">More...</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    };
};


export default view(DetailScreen);
