import React, { Component } from "react";
import Navbar from "./navbar";
import ProductCard from "../components/productCard";

class Products extends Component {
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
        imgURL: "https://picsum.photos/1600/900",
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
        imgURL: "https://picsum.photos/1600/900",
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
  renderProducts = this.state.products.map((p) => {
    return (
      <ProductCard
        name={p.name}
        src={p.imgURL}
        type={p.type}
        price={p.price}
      ></ProductCard>
    );
  });
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* https://tailwindcomponents.com/component/airbnb-like-navbar */}
        <div class="px-10 grid grid-cols-4 gap-4">{this.renderProducts}</div>
      </React.Fragment>
    );
  }
}

export default Products;
