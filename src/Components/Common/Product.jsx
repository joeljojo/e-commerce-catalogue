const Product = ({ product }) => {
  return (
    <div className="max-w-md max-h-96 mx-8">
      <a href="#">
        <img
          src={product?.image}
          alt="Featured Product"
          className="w-full h-full"
        />
        <h2 className="text-text-dark font-bold">{product?.title}</h2>
        <p className="text-secondary">$ {product?.price}</p>
      </a>
    </div>
  );
};
export default Product;
