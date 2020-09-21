import React, { Component } from "react";
import "./Homepage.scss";

export class Homepage extends Component {
  public render() {
    return (
      <div className="homepage">
        {/* Grid Outlines */}
        <div className="grid">
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
          <div className="grid-box"></div>
        </div>
        {/* Grid Thumbs */}
        <div className="grid">
          <div className="grid-content">
            <img
              className="grid-1"
              src="https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              alt=""
            ></img>
          </div>
          <div className="grid-content">
            <img
              className="grid-2"
              src="https://images.unsplash.com/photo-1517451330947-7809dead78d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
              alt=""
            ></img>
          </div>
          <div className="grid-content">
            <img
              className="grid-3"
              src="https://images.unsplash.com/photo-1497910091122-9f8a7746eb33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
              alt=""
            ></img>
          </div>
          <div className="grid-content">
            <img
              className="grid-4"
              src="https://images.unsplash.com/photo-1599727572359-53e2b1d0d012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2706&q=80"
              alt=""
            ></img>
          </div>
          <div className="menu">
            <span>Wip.</span>
          </div>
        </div>
      </div>
    );
  }
}
