import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import Navbar from "./components/Navbar";

@inject("store")
@observer
export default class AdvisoryDashbobard extends Component {
    render() {
        const { ui } = this.props.store;
        return (
            <Fragment>
                <Navbar/>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">
                            Hello Name 
                        </h1>
                        <h2 className="subtitle">
                            You have been doing great job.Keep motivating.Keep advising.
                        </h2>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    
                                        <p className="title is-4">Title</p>
                                        <p> Description </p>
                                        
                                </div>
                                    

                                <footer class="card-footer">
                                    
                                    <a href="#" class="card-footer-item">Edit/View</a>
                                    
                                </footer>

                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    
                                        <p className="title is-4">Title</p>
                                        <p> Description </p>
                                        
                                </div>
                                    

                                <footer class="card-footer">
                                    
                                    <a href="#" class="card-footer-item">Edit/View</a>
                                    
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    
                                        <p className="title is-4">Title</p>
                                        <p> Description </p>
                                        
                                </div>
                                    

                                <footer class="card-footer">
                                    
                                    <a href="#" class="card-footer-item">Edit/View</a>
                                    
                                </footer>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    
                                        <p className="title is-4">Title</p>
                                        <p> Description </p>
                                        
                                </div>
                                    

                                <footer class="card-footer">
                                    
                                    <a href="#" class="card-footer-item">Edit/View</a>
                                    
                                </footer>
                            </div>
                        </div>
                    </div>
                    
                </div> 
            </Fragment>
        );
    }
}
