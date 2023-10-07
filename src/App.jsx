import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductsPage from "./Components/Products/ProducsPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/products" Component={ProductsPage} />
    </Routes>
  );
}

export default App;
