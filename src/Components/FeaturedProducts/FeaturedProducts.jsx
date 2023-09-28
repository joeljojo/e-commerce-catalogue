import { useState } from "react";
import fetchData from "../Data/Data";
import Slider from "./Slider";
import { useEffect } from "react";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const options = { method: "GET" };
    // Fetch data
    fetchData(url, options)
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <section id="#featured-products" className="bg-white">
      <div className="my-14">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-text-dark">
            Featured Products
          </h1>
        </div>
        <div>
          {error ? <p>{error.message}</p> : <Slider products={products} />}
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
