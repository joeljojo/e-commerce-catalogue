import TopNabBar from "../Nav/TopNavBar";
import Logo from "../Nav/Logo";
import Search from "../Nav/Search";
import NavBar from "../Nav/NavBar";
import CartButton from "../Nav/CartButton";
import Welcome from "../Welcome/Welcome";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import NewsLetter from "../NewsLetter/NewsLetter";
import About from "../About/About";
import { useState, useEffect } from "react";
import fetchData from "../Data/Data";
import Footer from "../Common/Footer";
import Copyright from "../Common/Copyright";
function Home() {
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

export default Home;
