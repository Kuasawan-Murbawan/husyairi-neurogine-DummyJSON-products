import React from "react";
import { FlatList, ActivityIndicator, View, Text } from "react-native";
import { useProducts } from "../hooks/useProducts";
import { EmptyView, ErrorView, LoadingView } from "../components/StateViews";

export default function ProductListScreen({ navigation }) {
	const { products, status, retry, errorMessage, loadMore } = useProducts();

	if (status === "loading") {
		return <LoadingView />;
	}

	if (status === "error") {
		return <ErrorView message={errorMessage} onRetry={retry} />;
	}

	if (status === "success" && products.length === 0) {
		return <EmptyView />;
	}

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
