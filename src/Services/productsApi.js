const BASE_URL = "https://fakestoreapi.com";

// This fetchData function enables us to fetch data
async function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    const response = fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      return response.json().catch((error) => reject(new Error(error.message)));
    }
    return response.json().then((data) => resolve(data));
  });
}

async function fetchProducts() {
  return fetchData("/products");
}

const productsApi = {
  fetchProducts,
};

export default productsApi;
