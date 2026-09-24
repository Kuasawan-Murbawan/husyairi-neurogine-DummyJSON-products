import { useCallback, useEffect, useState } from "react";
import { fetchProductById } from "../api/dummyjsonAPI";

export function useProductDetail(id) {
	const [product, setProduct] = useState(null);
	const [status, setStatus] = useState("loading");
	const [errorMessage, setErrorMessage] = useState(null);

	const load = useCallback(async () => {
		try {
			setStatus("loading");
			const data = await fetchProductById(id);
			setProduct(data);
			setStatus("success");
		} catch (err) {
			setErrorMessage(err.message);
			setStatus("error");
		}
	}, [id]);

	useEffect(() => {
		load();
	}, [load]);

	return { product, status, errorMessage, retry: load };
}
