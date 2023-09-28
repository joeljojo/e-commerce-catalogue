const Product = ({ product }) => {
  return (
    <div className="max-w-md max-h-96 mx-8 mb-14">
      <a href="#">
        <img
          src={product?.image}
          alt="Featured Product"
          className="w-full h-full border-2 border-text-dark p-3"
        />
        <h2 className="text-text-dark font-bold pt-3">{product?.title}</h2>
        <p className="text-secondary">$ {product?.price}</p>
      </a>
    </div>
  );
};
export default Product;
