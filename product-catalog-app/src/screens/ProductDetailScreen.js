import React from "react";
import { View, Text } from "react-native";

export default function ProductDetailScreen({ route }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Detail for product #{route.params.id}</Text>
		</View>
	);
}
