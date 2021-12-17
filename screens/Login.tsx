import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Image, Pressable } from 'react-native'
import { useToast } from 'react-native-toast-notifications'
import { login } from '../api'
import { BoldText } from '../components/AppText'
import { AppTextInput } from '../components/AppTextInput'

export default function Login({ navigation }: any) {
	const toast = useToast()
	const [username, setUserName] = useState('donosama')
	const [password, setPaswword] = useState('password')

	const loginParams = {
		username,
		password,
	}
	async function userLogin() {
		try {
			toast.hideAll()
			toast.show('Logging in. Please wait...', { type: 'normal' })
			await login({ username, password })
			toast.hideAll()
			navigation.navigate('WaitingRoom')
		} catch (error) {
			toast.hideAll()
			toast.show('Unable to login. Please try again.', { type: 'danger' })
		}
	}
	return (
		<View style={pageStyles.page}>
			<Image style={pageStyles.logo} source={require('../assets/logo-fingo-small.png')} />
			<BoldText style={pageStyles.headerLoginText}>Login</BoldText>

			<AppTextInput
				onChangeText={(text: string) => setUserName(text)}
				style={pageStyles.input}
				placeholder="Username"
				value={username}
			/>
			<AppTextInput
				onChangeText={(text: string) => setPaswword(text)}
				style={pageStyles.input}
				placeholder="Password"
				textContentType="password"
				secureTextEntry={true}
				value={password}
			/>

			<Pressable style={pageStyles.btnLogin} onPress={userLogin}>
				<BoldText>Login</BoldText>
			</Pressable>
		</View>
	)
}

const pageStyles = StyleSheet.create({
	page: {
		backgroundColor: '#27aeb8',
		flex: 1,
		height: '100%',
		paddingHorizontal: 30,
		paddingVertical: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		marginBottom: 50,
	},
	headerLoginText: {
		marginBottom: 50,
		fontSize: 40,
	},
	input: {
		width: 300,
	},
	btnLogin: {
		backgroundColor: '#3CE9A3',
		width: 300,
		display: 'flex',
		alignItems: 'center',
		paddingVertical: 15,
		borderRadius: 100,
		elevation: 10,
	},
	btnLoginText: {
		textAlign: 'center',
	},
})
