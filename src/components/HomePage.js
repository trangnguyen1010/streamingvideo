import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = (props) => (
  <div className="container">
    <div className="row">
      <div className="col detail">Video player 1</div>
      <div className="col detail">Video player 2</div>
      <div className="col detail">Video player 2</div>
    </div>
    <div>
      <Link
        to={"/:id"}
        className="btn btn-primary"
        style={{ marginRight: "10px" }}
      >
        Join Room
      </Link>
      <Link to={"/new"} className="btn btn-secondary">
        New Room
      </Link>
    </div>
  </div>
);

export default HomePage;
