import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

@inject("store")
@observer
export default class Auth extends Component {
    render() {
        const { ui } = this.props.store;
        return (
            <Fragment>
                <Navbar />
                <div className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="column is-one-third"></div>
                        <div className="box">
                            <div className="tabs is-centered">
                                <ul>
                                    <li class="is-active"><a>Login</a></li>
                                    <li><a>Register</a></li>
                                </ul>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="username" placeholder="Username" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Password" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="tabs is-centered">
                                <ul>
                                    <li><a>Don't have an Account?</a></li>
                                    <li><a>Forgot Password?</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
