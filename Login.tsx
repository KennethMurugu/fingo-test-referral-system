import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Login({ navigation }: any) {
	return (
		<View>
			<Text>Login</Text>
			<Button title="Login" onPress={() => navigation.navigate('WaitingRoom')}></Button>
		</View>
	)
}
