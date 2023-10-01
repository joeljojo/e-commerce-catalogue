import TopNabBar from "./Components/Nav/TopNavBar";
import Logo from "./Components/Nav/Logo";
import Search from "./Components/Nav/Search";
import NavBar from "./Components/Nav/NavBar";
import CartButton from "./Components/Nav/CartButton";
import Welcome from "./Components/Welcome/Welcome";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import About from "./Components/About/About";
import { useState, useEffect } from "react";
import fetchData from "./Components/Data/Data";
import Footer from "./Components/Common/Footer";
import Copyright from "./Components/Common/Copyright";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const options = { method: "GET" };
    //Fetch data
    fetchData(url, options)
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, []);
  return (
    <div>
      <TopNabBar>
        <div className="flex items-center justify-around">
          <div className="flex">
            <Logo />
            <Search />
          </div>
          <NavBar />
          <CartButton />
        </div>
      </TopNabBar>
      <Welcome />
      <FeaturedProducts products={products} error={error} />
      <NewsLetter />
      <About />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
