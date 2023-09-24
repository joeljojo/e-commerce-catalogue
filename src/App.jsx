import CartButton from "./Nav/CartButton";
import Logo from "./Nav/Logo";
import NavBar from "./Nav/NavBar";
import Search from "./Nav/Search";
import TopNavBar from "./Nav/TopNavBar";
import Welcome from "./Welcome/Welcome";

function App() {
  return (
    <div>
      <TopNavBar>
        <div className="flex items-center justify-around">
          <div className="flex">
            <Logo />
            <Search />
          </div>
          <NavBar />
          <CartButton />
        </div>
      </TopNavBar>
      <Welcome />
    </div>
  );
}

export default App;
