import "./header.component.scss";

import {store, view}                                from "react-easy-state";
import {Component, useState, useEffect, useReducer} from "react";
import {Link}                                       from "react-router-dom";



function HeaderComponent() {

    return (
        <div data-component="header">

            <div className="header-logo">
                {/*<img src="/static/img/small-logo.png"/>*/}
                <img src="/static/img/logo-6.png"/>
            </div>

            <div className="header-text">Flat-Pack CMS</div>

            <div className="header-hello">
                <i className="fas fa-user"></i> &nbsp; Hi, Nathan
            </div>


        </div>
    );
}


export default view(HeaderComponent);