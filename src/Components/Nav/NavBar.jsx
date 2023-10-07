import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="flex">
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          <a href="#about">About</a>
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          <Link to={"/products"}>Shop</Link>
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          Help
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
