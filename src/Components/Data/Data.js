async function fetchData(url, options) {
  let retryCount = 0;
  const maxRetries = 3;
  return new Promise((resolve, reject) => {
    function doFetch() {
      fetch(url, options).then((response) => {
        if (!response.ok) {
          /**We ensure that the API call tries at least 3 times before
          we can give an error to the client */
          if (retryCount < maxRetries) {
            retryCount++;
            doFetch();
          } else {
            reject(new Error("Whoops! there is an error fetching products!"));
          }
        } else {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error.message); // Catch errors when parsing JSON
            });
        }
      });
    }
    doFetch();
  });
}
export default fetchData;
