import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirts",
      size: "M",
      color: "R",
      quantity: 1,
      price: 50,
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "M",
      color: "R",
      quantity: 1,
      price: 50,
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      productId: 3,
      name: "Jackets",
      size: "M",
      color: "B",
      quantity: 1,
      price: 50,
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
    {
      productId: 4,
      name: "Pants",
      size: "L",
      color: "C",
      quantity: 1,
      price: 50,
      imageUrl: "https://picsum.photos/200/300?random=1",
    },
  ];
  return (
    <div className="flex flex-col">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          {/* Item layout */}
          <div className="flex items-center">
            {/* Product Image */}
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            {/* Product Data or center content */}
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size:{product.size} | Color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Product Price or right content */}
          <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
