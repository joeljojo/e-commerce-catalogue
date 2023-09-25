import fetchData from "../Data/Data";
// import Slider from "./Slider";

const FeaturedProducts = () => {
  const url = "https://fakestoreapi.com/products";
  const options = { method: "GET" };
  let products = fetchData(url, options);
  console.log(products);
  return <section className="bg-white"></section>;
};
export default FeaturedProducts;
