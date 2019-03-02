import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

@inject("store")
@observer
export default class Auth extends Component {
    state = {
        loginTabActive : true
    };

    toggleTab(){
        this.setState({loginTabActive: !this.state.loginTabActive});
    }

    render() {
        const { ui } = this.props.store;
        return (
            <Fragment>
                <Navbar />
                <div className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-one-third"></div>
                                <div className="column is-one-third">
                                    <div className="box">
                                        <div className="tabs is-centered">
                                            <ul>
                                                <li className={ this.state.loginTabActive
                                                            ? "is-active"
                                                            : ""
                                                        }
                                                >
                                                    <a onClick={() => {
                                                        this.toggleTab();
                                                    }}>Login</a>
                                                </li>
                                                <li className={ !this.state.loginTabActive
                                                    ? "is-active"
                                                    : ""
                                                }
                                                >
                                                    <a onClick={() => {
                                                        this.toggleTab();
                                                    }}>Register</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {
                                            this.state.loginTabActive ? (
                                                <div>
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
                                                    <div>
                                                        <p><a>Don't have an Account?</a> &nbsp;
                                                        <a>Forgot Password?</a></p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="field">
                                                        <p className="control has-icons-left has-icons-right">
                                                            <input className="input" type="firstname" placeholder="First Name" />
                                                            <span className="icon is-small is-left">
                                                                <i className="fas fa-user"></i>
                                                             </span>
                                                        </p>
                                                    </div>
                                                    <div className="field">
                                                        <p className="control has-icons-left has-icons-right">
                                                            <input className="input" type="lastname" placeholder="Last Name" />
                                                            <span className="icon is-small is-left">
                                                                <i className="fas fa-user"></i>
                                                             </span>
                                                        </p>
                                                    </div>
                                                    <div className="field">
                                                        <p className="control has-icons-left has-icons-right">
                                                            <input className="input" type="contact" placeholder="Contact Number" />
                                                            <span className="icon is-small is-left">
                                                                <i className="fas fa-user"></i>
                                                             </span>
                                                        </p>
                                                    </div>
                                                    <div className="field">
                                                        <p className="control has-icons-left has-icons-right">
                                                            <input className="input" type="email" placeholder="E-mail" />
                                                            <span className="icon is-small is-left">
                                                                <i className="fas fa-user"></i>
                                                             </span>
                                                        </p>
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
                                                        <br></br>
                                                        <div class="button is-info">Sign Up!
                                                        </div>
                                                        <br></br> &nbsp;
                                                        <p><a>Already have an Account?</a></p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}
