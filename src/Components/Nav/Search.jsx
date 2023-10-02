import { GoSearch } from "react-icons/go";
const Search = ({ onChange }) => {
  return (
    <form className="relative box-border p-4 w-96 ml-8">
      <div className="relative">
        <input
          className="py-2 pr-8 pl-4 border-gray-400 border w-full placeholder:italic placeholder:text-text-dark focus:border-none focus:outline-none"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={onChange}
        />
        <GoSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-text-dark" />
      </div>
    </form>
  );
};
export default Search;
