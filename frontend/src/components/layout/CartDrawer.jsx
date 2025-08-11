import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = (props) => {
  return (
    <div
      className={`fixed top-0 right-0 container h-full w-2/4 sm:w-1/2 md:w-[30rem] bg-white shadow-lg transform transition-transform duration-300  flex flex-col z-50 ${
        props.drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => props.toggleCartDrawer()}
          className="cursor-pointer"
        >
          <IoMdClose className="h-5 w-6 text-gray-600 hover:text-gray-700" />
        </button>
      </div>

      {/* Cart content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Component for cart content */}
        <CartContent />
      </div>

      {/* Checkout button */}
      <div className="p-4 bg-white sticky bottom-0 flex flex-col items-center">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer">
          Checkout
        </button>
        <span className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout
        </span>
      </div>
    </div>
  );
};

export default CartDrawer;
