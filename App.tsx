import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Login from './screens/Login'
import ReferralScreen from './screens/ReferralScreen'
import WaitingRoom from './screens/WaitingRoom'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		// <View style={styles.container}>
		//   <Text>Open up App.tsx to start working on your app!</Text>
		//   <StatusBar style="auto" />
		// </View>
		// <SafeAreaView>
		<NavigationContainer>
			<StatusBar style="light" translucent={true} />
			<Stack.Navigator>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="WaitingRoom" component={WaitingRoom} options={{ headerShown: false }} />
				<Stack.Screen name="ReferralScreen" component={ReferralScreen} />
			</Stack.Navigator>
		</NavigationContainer>
		// </SafeAreaView>
	)
}

function Header() {}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
