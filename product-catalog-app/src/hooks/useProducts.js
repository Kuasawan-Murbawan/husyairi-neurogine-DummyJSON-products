import { useCallback, useEffect, useState } from "react";
import { fetchProducts } from "../api/dummyjsonAPI";

const PAGE_SIZE = 20;

export function useProducts() {
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(0);
	const [total, setTotal] = useState(0);
	const [status, setStatus] = useState("loading"); // loading | loadingMore | error | success
	const [errorMessage, setErrorMessage] = useState(null);

	const loadPage = useCallback(async (nextSkip) => {
		try {
			setStatus(nextSkip === 0 ? "loading" : "loadingMore");
			setErrorMessage(null);
			const data = await fetchProducts(nextSkip, PAGE_SIZE);
			setProducts((prev) =>
				nextSkip === 0 ? data.products : [...prev, ...data.products],
			);
			setTotal(data.total);
			setSkip(nextSkip + data.products.length);
			setStatus("success");
		} catch (err) {
			setErrorMessage(err.message || "Something went wrong");
			setStatus("error");
		}
	}, []);

	useEffect(() => {
		loadPage(0);
	}, [loadPage]);

	const loadMore = useCallback(() => {
		if (status === "loading" || status === "loadingMore") {
			return;
		}

		if (skip >= total && total != 0) {
			return;
		}

		loadPage(skip);
	}, [status, skip, total, loadPage]);

	return { products, status, errorMessage, loadMore, retry: () => loadPage(0) };
}
