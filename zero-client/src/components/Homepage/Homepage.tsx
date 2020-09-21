import React, { Component } from "react";
import { Carousel } from "antd";
import "./Homepage.scss";

export class Homepage extends Component {
  public render() {
    return (
      <div className="homepage">
        <Carousel autoplay={true}>
          <div>
            <h3 className="content">1</h3>
          </div>
          <div>
            <h3 className="content">2</h3>
          </div>
          <div>
            <h3 className="content">3</h3>
          </div>
          <div>
            <h3 className="content">4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
