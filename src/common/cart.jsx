import React from "react";
import CartCard from "../components/cartCard";

const Cart = () => {
  return (
    <React.Fragment>
      <h1 className="m-5 text-2xl font-bold">Cart</h1>
      <hr />
      <div className="h-screen">
        <div className="h-2/3 overflow-auto">
          <CartCard></CartCard>
          <CartCard></CartCard>
          <CartCard></CartCard>
        </div>
        <div className="flex flex-row justify-between p-5 mx-5 text-lg font-bold">
          <p>Delivery</p>
          <p className="text-gray-500">Standard-Free</p>
        </div>
        <div className="flex justify-center">
          <button className="w-2/3 p-3 border-0 rounded-full mt-5 font-bold bg-black text-white text-lg">
            <i className="fa fa-cart-plus"></i> Buy For $500
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
