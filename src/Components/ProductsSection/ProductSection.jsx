import Product from "../Common/Product";

const ProductSection = ({ products }) => {
  return (
    <section id="product-section" className="bg-background">
      <div className="py-14 grid grid-cols-3">
        <div className="row-span-2 bg-red-200 w-96 h-80">
          <Product product={products[0]} />
          Product 1
        </div>
        <div className="bg-blue-400 w-48 h-40">
          <Product product={products[1]} />
          Product 2
        </div>
        <div className="bg-yellow-200 w-48 h-40">
          <Product product={products[2]} />
          Product 3
        </div>
        <div className="bg-green-200 w-48 h-40">
          <Product product={products[3]} />
          Product 4
        </div>
        <div className="bg-gray-200 w-48 h-40">
          <Product product={products[4]} />
          Product 5
        </div>
      </div>
    </section>
  );
};
export default ProductSection;
