import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Navbar from "./components/Navbar";

@inject("store")
@observer
export default class AdvisoryCreate extends Component {
    render() {
        const { ui } = this.props.store;
        return (
            <Fragment>
                <Navbar/>
            </Fragment>
        );
    }
}
