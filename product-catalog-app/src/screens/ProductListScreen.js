import React from "react";
import { View, Text } from "react-native";

export default function ProductListScreen({ navigation }) {
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
