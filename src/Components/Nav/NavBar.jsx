const NavBar = () => {
  return (
    <div>
      <ul className="flex">
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          Home
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          About
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          Shop
        </li>
        <li className="text-white p-4 font-bold text-base hover:text-secondary hover:cursor-pointer">
          Help
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
