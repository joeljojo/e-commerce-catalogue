import { useState, useEffect } from "react";
import fetchData from "../Data/Data";
import Product from "../Common/Product";
import TopNavBar from "../Nav/TopNavBar";
import Logo from "../Nav/Logo";
import Search from "../Nav/Search";
import NavBar from "../Nav/NavBar";
import CartButton from "../Nav/CartButton";
import Footer from "../Common/Footer";
import Copyright from "../Common/Copyright";
import filteredProducts from "../Data/Utils";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const options = { method: "GET" };
    //Fetch data
    fetchData(url, options)
      .then(filteredProducts(query).then((data) => setProducts(data)))
      .catch((error) => setError(error));
  }, [query]);

  function handleSearch(e) {
    setQuery(e.target.value);
  }
  return (
    <div>
      <TopNavBar>
        <div className="flex items-center justify-around">
          <div className="flex">
            <Logo />
            <Search onChange={handleSearch} />
          </div>
          <NavBar />
          <CartButton />
        </div>
      </TopNavBar>

      {error && <div className="text-red-400 text-center">{error.message}</div>}

      <div className="grid grid-cols-4 m-12">
        {products.map((product) => (
          <div key={product.title} className="my-10">
            <Product product={product} />
          </div>
        ))}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};
export default ProductsPage;
