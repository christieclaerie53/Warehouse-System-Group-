const API_URL = "http://localhost:5173/";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
}
