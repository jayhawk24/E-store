import React, { Component } from "react";
import Stories from "./stories";
import Navbar from "./navbar";
import Products from "./products";

class Dashboad extends Component {
  state = {
    categories: [
      { name: "Gown", imgURL: "https://picsum.photos/200" },
      { name: "CropTop", imgURL: "https://picsum.photos/200" },
      { name: "Dresses", imgURL: "https://picsum.photos/200" },
      { name: "Sarees", imgURL: "https://picsum.photos/200" },
      { name: "Kurti", imgURL: "https://picsum.photos/200" },
    ],
    products: [
      {
        name: "Product 1",
        imgURL: "https://source.unsplash.com/MNtag_eXMKw/1600x900",
        type: "Kurti",
        price: 800,
      },
      {
        name: "Product 2",
        imgURL: "https://picsum.photos/400",
        type: "Kurti",
        price: 800,
      },
      {
        name: "Product 3",
        imgURL: "https://source.unsplash.com/MNtag_eXMKw/1600x900",
        type: "Kurti",
        price: 800,
      },
      {
        name: "Product 4",
        imgURL: "https://picsum.photos/400",
        type: "Kurti",
        price: 800,
      },
      {
        name: "Product 5",
        imgURL: "https://source.unsplash.com/MNtag_eXMKw/1600x900",
        type: "Kurti",
        price: 800,
      },
    ],
  };
  render() {
    return (
      <div className="container main">
        <Navbar />
        {/* https://tailwindcomponents.com/component/airbnb-like-navbar */}
        <Stories items={this.state.categories}>
          {/* https://tailwindcomponents.com/component/story-component */}
        </Stories>
        <Products items={this.state.products} />
      </div>
    );
  }
}

export default Dashboad;
