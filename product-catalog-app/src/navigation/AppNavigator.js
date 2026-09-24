import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductListScreen from "../screens/ProductListScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="ProductList"
					component={ProductListScreen}
					options={{ title: "Products" }}
				/>
				<Stack.Screen
					name="ProductDetail"
					component={ProductDetailScreen}
					options={({ route }) => ({ title: route.params?.title ?? "Product" })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
