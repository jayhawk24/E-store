import React from "react";
import Carousel from "nuka-carousel";
const images = [
  { url: "https://picsum.photos/500/900" },
  { url: "https://picsum.photos/500/900" },
  { url: "https://picsum.photos/500/900" },
  { url: "https://picsum.photos/500/900" },
];

export default class Item extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="h-96 w-full">
          <Carousel
            // https://github.com/FormidableLabs/nuka-carousel
            autoplay={true}
            dragging={true}
            pauseOnHover={true}
            defaultControlsConfig={{
              nextButtonText: ">",
              prevButtonText: "<",
              pagingDotsStyle: {
                margin: 3,
              },
            }}
          >
            <img src="https://picsum.photos/500/900" />
            <img src="https://picsum.photos/500/900" />
            <img src="https://picsum.photos/500/900" />
            <img src="https://picsum.photos/500/900" />
          </Carousel>
        </div>
        <div className="flex flex-col">
          <div className="price p-5 mt-10 text-xl">$60</div>
          <div className="text-black p-5 pt-0 font-extrabold text-4xl">
            Original Black Suit
          </div>
          <div className="colorCircles flex ">
            <div className="bg-blue-500 m-5 rounded-full h-8 w-8"></div>
            <div className="bg-yellow-500 m-5 rounded-full h-8 w-8"></div>
            <div className="bg-green-500 m-5 rounded-full h-8 w-8"></div>
            <div className="bg-black m-5 rounded-full h-8 w-8"></div>
          </div>
          <div className="sizes flex flex-row items-center justify-center m-5 mt-0">
            <div className="bg-gradient-to-b from-gray-900 to-black p-3 m-1 rounded-lg h-10 w-auto flex items-center justify-center text-white font-bold text-xl flex-grow">
              S
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black p-3 m-1 rounded-lg h-10 w-auto  flex items-center justify-center  text-white font-bold text-xl flex-grow">
              M
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-black p-3 m-1 rounded-lg h-10 w-auto  flex items-center justify-center text-white font-bold text-xl flex-grow">
              L
            </div>
          </div>
          <button className="w-1/2 m-auto p-3 border-0 rounded-full mt-5 mb-3 font-bold bg-black text-white text-lg">
            <i className="fa fa-cart-plus"></i> Add to Cart
          </button>
          <div className="description p-5">
            <h3 className="font-bold text-gray-800 text-lg">Description</h3>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quia at asperiores ut earum atque molestiae est expedita beatae
              aut,
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
