import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Login from './Login'
import ReferralScreen from './ReferralScreen'
import WaitingRoom from './WaitingRoom'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		// <View style={styles.container}>
		//   <Text>Open up App.tsx to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="WaitingRoom" component={WaitingRoom} />
				<Stack.Screen name="ReferralScreen" component={ReferralScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
