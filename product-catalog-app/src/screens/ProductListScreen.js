import { React, useEffect } from "react";
import { View, Text } from "react-native";
import { fetchProducts } from "../api/dummyjsonAPI.js";

export default function ProductListScreen({ navigation }) {
	// useEffect(() => {
	// 	fetchProducts(0, 20)
	// 		.then((data) => console.log("fetchProducts result:", data))
	// 		.catch((err) => console.log("fetchProducts error:", err));
	// }, []);

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text
				onPress={() =>
					navigation.navigate("ProductDetail", { id: 1, title: "Test" })
				}
			>
				Go to detail
			</Text>
		</View>
	);
}
