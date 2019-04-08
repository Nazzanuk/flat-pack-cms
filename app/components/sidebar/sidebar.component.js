import "./sidebar.component.scss";

import {store, view} from "react-easy-state";
import {Link}        from "react-router-dom";


const SidebarComponent = () => {

    return (
        <div data-component="sidebar" data-active={true}>

            <div className="sidebar">

                <div className="menu-items">
                    {/*<div className="menu-item"><i className="fal fa-fw fa-tachometer-alt"/> &nbsp; Dashboard</div>*/}
                    <Link to={'/asset'} className="menu-item active"><i className="fal fa-fw fa-file-alt"/> &nbsp; My IKEA Articles</Link>
                    <div className="menu-item"><i className="fal fa-fw fa-th-list"/> &nbsp; Customer Advice</div>
                    <div className="menu-item"><i className="fal fa-fw fa-tags"/> &nbsp; Campaigns</div>
                    <div className="menu-item"><i className="fal fa-fw fa-images"/> &nbsp; Media</div>
                    {/*<div className="menu-item"><i className="fal fa-fw fa-users"/> &nbsp; Users</div>*/}
                    {/*<div className="menu-item"><i className="fal fa-fw fa-search"/> &nbsp; Search</div>*/}
                </div>

            </div>

        </div>
    );
};


export default view(SidebarComponent);