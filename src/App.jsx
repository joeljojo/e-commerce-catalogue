import TopNabBar from "./Components/Nav/TopNavBar";
import Logo from "./Components/Nav/Logo";
import Search from "./Components/Nav/Search";
import NavBar from "./Components/Nav/NavBar";
import CartButton from "./Components/Nav/CartButton";
import Welcome from "./Components/Welcome/Welcome";
import FeaturedProducts from "./Components/FeaturedProducts/FeaturedProducts";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
function App() {
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
      <FeaturedProducts />
      <NewsLetter />
    </div>
  );
}

export default App;
