import React, { Component } from "react";
import Categories from "./categories";

class Dashboad extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Categories></Categories>
        {/*
         <Banner></Banner>
        <Products></Products> 
        */}
      </React.Fragment>
    );
  }
}

export default Dashboad;
