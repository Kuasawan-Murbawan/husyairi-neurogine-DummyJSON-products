import {
	View,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	StyleSheet,
} from "react-native";

import React from "react";

export function LoadingView() {
	return (
		<View style={styles.center}>
			<ActivityIndicator size="large" />
		</View>
	);
}

export function EmptyView({ message = "No products found" }) {
	return (
		<View style={styles.center}>
			<Text>{message}</Text>
		</View>
	);
}

export function ErrorView({ message, onRetry }) {
	return (
		<View style={styles.center}>
			<Text style={styles.errorText}>Error: {message}</Text>
			<TouchableOpacity style={styles.button} onPress={onRetry}>
				<Text style={styles.buttonText}>Retry</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 24,
	},
	errorText: { color: "#B00020", marginBottom: 12, textAlign: "center" },
	button: {
		backgroundColor: "#222",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 6,
	},
	buttonText: { color: "#fff", fontWeight: "600" },
});
