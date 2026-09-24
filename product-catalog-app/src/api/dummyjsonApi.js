const BASE_URL = "https://dummyjson.com";

export async function fetchProducts(skip = 0, limit = 20) {
	const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
	if (!res.ok)
		throw new Error(`Failed to fetch products (status ${res.status})`);
	return res.json();
}

export async function fetchProductById(id) {
	const res = await fetch(`${BASE_URL}/products/${id}`);
	if (!res.ok)
		throw new Error(`Failed to fetch product ${id} (status ${res.status})`);
	return res.json();
}

export async function searchProducts(query) {
	const res = await fetch(
		`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`,
		// use encode to avoid things like & from registering as another variable
	);

	if (!res.ok) {
		throw new Error(`Failed to retrieve products with name "${query}"`);
	}
	return res.json();
}
