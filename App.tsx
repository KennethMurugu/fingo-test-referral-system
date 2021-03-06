import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import Login from './screens/Login'
import ReferralScreen from './screens/ReferralScreen'
import WaitingRoom from './screens/WaitingRoom'
import { useFonts, DMSans_400Regular, DMSans_700Bold } from '@expo-google-fonts/dm-sans'
import { ToastProvider } from 'react-native-toast-notifications'

const Stack = createNativeStackNavigator()

export default function App() {
	let [isFontsLoaded] = useFonts({
		DMSans_400Regular,
		DMSans_700Bold,
	})
	if (!isFontsLoaded) return <View></View>
	return (
		<ToastProvider normalColor="#1681e6">
			<NavigationContainer>
				<StatusBar style="light" translucent={true} />
				<Stack.Navigator screenOptions={{ animation: 'slide_from_right' }}>
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<Stack.Screen name="WaitingRoom" component={WaitingRoom} options={{ headerShown: false }} />
					<Stack.Screen
						name="ReferralScreen"
						component={ReferralScreen}
						options={{
							title: 'Referrals',
							headerStyle: { backgroundColor: '#00666C' },
							headerTitleStyle: { color: '#FFF' },
							headerTintColor: '#FFF',
							headerShadowVisible: false,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ToastProvider>
	)
}
