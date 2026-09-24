import React from "react";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import { useProducts } from "../hooks/useProducts";

export default function ProductListScreen({ navigation }) {
	const { products, status, loadMore } = useProducts();

	return (
		// use flatlist bc have scroll loading, pull to refresh,
		<FlatList
			data={products}
			keyExtractor={(item) => String(item.id)}
			renderItem={({ item }) => (
				<Text
					style={{ padding: 12 }}
					onPress={() =>
						navigation.navigate("ProductDetail", {
							id: item.id,
							title: item.title,
						})
					}
				>
					{item.title} — ${item.price}
				</Text>
			)}
			onEndReached={loadMore}
			onEndReachedThreshold={0.4}
			ListFooterComponent={
				status === "loadingMore" ? (
					<ActivityIndicator style={{ margin: 16 }} />
				) : null
			}
		/>
	);
}
