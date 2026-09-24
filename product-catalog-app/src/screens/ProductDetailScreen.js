import { useState, useEffect, React } from "react";

import { View, Text } from "react-native";

export default function ProductDetailScreen({ route }) {
	useEffect(() => {
		fetchProducts(0, 20)
			.then((data) => console.log("fetchProducts result:", data))
			.catch((err) => console.log("fetchProducts error:", err));
	}, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Detail for product #{route.params.id}</Text>
		</View>
	);
}
