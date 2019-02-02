import React, { Component } from "react";

import "./style.css";

class Summary extends Component {

  render() {

    return (
    <div>
      <div className="card infoBox">
        <div className="container">
          <div className="row" style={{ backgroundColor: this.props.backgroundcolor }}>
            <div className="col-9">
              <div className="row">
                {this.props.name}
              </div>
              <div className="row">
                {this.props.status}
              </div>
            </div>
            <div className="col-3">
              <img className="statusLogo" src={this.props.src} />
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}}



export default Summary;