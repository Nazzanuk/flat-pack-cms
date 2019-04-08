import "babel-polyfill";
import {store, view} from "react-easy-state";

import react, {Component}           from "react";
import ReactDOM                     from "react-dom";
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Helmet}                     from "react-helmet";


import LiveStore from "stores/live.store";

import HeaderComponent          from "components/header/header.component";
import SidebarComponent         from "components/sidebar/sidebar.component";


import AssetScreen    from "screens/asset/asset.screen";
import DetailScreen   from "screens/detail/detail.screen";

import "global/app.scss";
import "../node_modules/trumbowyg/dist/ui/trumbowyg.css";



class App extends Component {

    constructor(props) {
        super(props);

        LiveStore.ShowPage();
        console.warn("props", props);
    }

    render() {
        return (
            <div data-page="page">
                <Helmet>
                    <title>IKEA</title>


                </Helmet>
                <HeaderComponent/>


                <div className="flex flex-row">
                    <SidebarComponent/>
                    <div className="app-screens">

                        <Route exact path="/" component={AssetScreen}/>
                        <Route exact path="/asset" component={AssetScreen}/>
                        <Route exact path="/detail" component={DetailScreen}/>
                    </div>
                </div>

            </div>
        );
    }
}


if (process.browser) {
    console.log("ReactDOM.hydrate");
    ReactDOM.hydrate(<BrowserRouter><App/></BrowserRouter>, document.getElementById("app"));
}

export default App;