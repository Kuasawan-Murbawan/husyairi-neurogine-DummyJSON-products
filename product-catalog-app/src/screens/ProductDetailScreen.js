import React from "react";
import { ScrollView, Image, Text, View, StyleSheet } from "react-native";
import { useProductDetail } from "../hooks/useProductDetail";
import { LoadingView, ErrorView } from "../components/StateViews";

export default function ProductDetailScreen({ route }) {
	const { product, status, errorMessage, retry } = useProductDetail(
		route.params.id,
	);

	if (status === "loading") return <LoadingView />;
	if (status === "error")
		return <ErrorView message={errorMessage} onRetry={retry} />;

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: product.thumbnail }} style={styles.image} />
			<View style={styles.content}>
				<Text style={styles.title}>{product.title}</Text>
				<Text style={styles.price}>
					${product.price} · ★ {product.rating}
				</Text>
				<Text style={styles.description}>{product.description}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: { width: "100%", height: 260 },
	content: { padding: 16 },
	title: { fontSize: 20, fontWeight: "700" },
	price: { marginTop: 8, fontSize: 16 },
	description: { marginTop: 16, lineHeight: 21 },
});
