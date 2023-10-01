import Slider from "./Slider";

const FeaturedProducts = ({ products, error }) => {
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
