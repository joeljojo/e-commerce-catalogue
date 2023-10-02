const Product = ({ product }) => {
  return (
    <div className="h-80 w-72">
      <a href="#">
        <div className="w-full h-4/5">
          <img
            src={product?.image}
            alt="Featured Product"
            className="w-full h-full border-2 p-3"
          />
        </div>
        <h2 className="text-text-dark font-bold pt-3">{product?.title}</h2>
        <p className="text-secondary">$ {product?.price}</p>
      </a>
    </div>
  );
};
export default Product;
