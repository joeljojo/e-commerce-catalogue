import { useState, useEffect } from "react";
import Product from "../Common/Product";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Slider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numberOfProducts = products.length;
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % numberOfProducts);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + numberOfProducts) % numberOfProducts);
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 4000);
    return () => clearInterval(intervalId);
  });
  return (
    <div className="flex justify-center mt-14 mb-24 gap-12">
      <button onClick={handlePrevious}>
        <AiOutlineCaretLeft size={"3rem"} />
      </button>
      <Product
        product={products[currentIndex]}
        className="transition-opacity duration-500"
      />
      <Product
        product={products[(currentIndex + 1) % numberOfProducts]}
        className="transition-opacity duration-500"
      />
      <button onClick={handleNext}>
        <AiOutlineCaretRight size={"3rem"} />
      </button>
    </div>
  );
};
export default Slider;
