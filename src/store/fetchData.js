/**
 * Fetch data from API
 * @returns {Promise<Response | never>}
 */
export const fetchData = async (q, p) => {
  try {
    const response = await fetch(
      `https://libraries.io/api/search?q=${q}&page=${p}&per_page=5`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
