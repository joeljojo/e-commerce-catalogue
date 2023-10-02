import fetchData from "./Data";

const filteredProducts = async (query) => {
  query = query.toLowerCase();
  const url = "https://fakestoreapi.com/products";
  const options = { method: "GET" };

  const products = await fetchData(url, options).then((data) => data);
  const result = products.filter((product) => {
    let categoryMatch = product.category
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query));

    let descriptionMatch = product.description
      .split(" ")
      .some((word) => word.toLowerCase().startsWith(query));
    return categoryMatch || descriptionMatch;
  });
  return result;
};
export default filteredProducts;
