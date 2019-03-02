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
        <Navbar />
        <div className="hero is-fullheight">
          <div className="hero-body has -text-centred">
            <div className="container">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Title</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Crops</label>
                </div>
                <div className="field-body">
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    <div class="field">
    
                        <label class="checkbox">
                            <input type="checkbox"/>
                            &nbsp; Crop 1
                        </label>
                    </div>
                    
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Details</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Enter the details."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
