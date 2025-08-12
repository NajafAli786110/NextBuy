import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  // States
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  //    Demo Data
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Sneakers",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Classic Sneakers",
        },
      ],
    },
    {
      _id: "3",
      name: "Leather Handbag",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Leather Handbag",
        },
      ],
    },
    {
      _id: "4",
      name: "Smart Watch",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Smart Watch",
        },
      ],
    },
    {
      _id: "5",
      name: "Sunglasses",
      price: 50,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Sunglasses",
        },
      ],
    },
    {
      _id: "6",
      name: "Wireless Earbuds",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Wireless Earbuds",
        },
      ],
    },
    {
      _id: "7",
      name: "Denim Jeans",
      price: 70,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "8",
      name: "Casual T-Shirt",
      price: 25,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Casual T-Shirt",
        },
      ],
    },
  ];

  //   Mouse Events Functions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX = scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseUp = (e) => {};
  const handleMouseMove = (e) => {
    if(!isDragging) return;
    const x = e.page - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseLeave = (e) => {
    // setIsDragging(false);
  };

  //   Scroll Function
  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  //   Update Scroll buttons
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };
  //   UseEffect
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  });

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Fresh Picks Just For You</h2>
        <p className="text-lg text-gray-600 mb-10">
          Discover our latest collection of trendy and high-quality products.
          From stylish fashion to everyday essentials.
        </p>

        {/* Scroll */}
        <div className="absolute right-0 bottom-[30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-sm border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-sm border bg-white text-black ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-scroll flex space-x-6 relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              className="w-full h-[500px] object-cover rounded-lg"
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-blur bg-white/50 backdrop-blur-md p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
