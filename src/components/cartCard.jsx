import React from "react";

const CartCard = () => {
  return (
    <div className="flex m-5 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-1/3 bg-cover"
        src="https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      />
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
        <p className="mt-2 text-gray-600 text-sm">asefasel123b1o2k3n5b</p>
        <div className="flex item-center mt-2">S</div>
        <div className="flex item-center justify-between">
          <div>
            <h1 className="text-gray-700 font-bold text-xl p-5">$220</h1>
          </div>
          <div className="flex flex-row p-5">
            <button className="px-3 py-2 m-2 bg-gray-600 text-white  rounded-full">
              <i className="fa fa-plus"></i>
            </button>
            <p className="py-2 text-2xl text-gray-600">2</p>
            <button className="px-3 py-2 m-2 bg-gray-600 text-white rounded-full">
              <i className="fa fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
