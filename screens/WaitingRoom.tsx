import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
	View,
	Text,
	Share,
	Image,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	Pressable,
	ScrollView,
} from 'react-native'

export default function WaitingRoom() {
	return (
		<ScrollView style={pageStyles.page}>
			<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={0}>
				<View style={logoHeaderStyles.wrapper}>
					<View style={logoHeaderStyles.imageContainer}>
						<Image style={logoHeaderStyles.logo} source={require('../assets/logo-fingo-small.png')} />
					</View>
					<Text style={logoHeaderStyles.logoText}>Fingo Africa</Text>
				</View>

				<View style={waitingTextStyles.wrapper}>
					<View style={waitingTextStyles.iconContainer}>
						<Image style={waitingTextStyles.icon} source={require('../assets/exclamation2.png')} />
					</View>

					<Text style={waitingTextStyles.waitingText}>
						You are
						{'\n'}
						<Text style={waitingTextStyles.waitingPosition}>5th</Text>
						{'\n'}
						in the waiting list
					</Text>
				</View>

				<Text style={referralStyles.textReferral}>Enter a referral code to start using the app.</Text>
				<TextInput style={referralStyles.codeInput} placeholder="Referral code" />

				<Pressable>
					<Text style={referralStyles.linkReferralsText}>Share my referral code</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

const pageStyles = StyleSheet.create({
	page: {
		backgroundColor: '#038E97',
		flex: 1,
		height: '100%',
		paddingHorizontal: 30,
		paddingVertical: 20,
	},
})

const logoHeaderStyles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 50,
		marginBottom: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 50,
		marginRight: 20,
	},
	logo: {
		resizeMode: 'contain',
		width: '100%',
	},
	logoText: {
		color: '#FFF',
		fontWeight: 'bold',
		fontSize: 32,
	},
})

const waitingTextStyles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		// borderWidth: 1,
		// borderColor: 'blue',
		width: '100%',
		marginBottom: 20,
	},
	iconContainer: {
		width: 100,
	},
	icon: {
		resizeMode: 'contain',
		width: '100%',
	},
	waitingText: {
		color: '#fff',
		fontSize: 24,
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		marginBottom: 40,
	},
	waitingPosition: {
		fontWeight: 'bold',
	},
})

const referralStyles = StyleSheet.create({
	wrapper: {
		textAlign: 'center',
	},
	textReferral: { fontWeight: 'bold', color: '#fff', fontSize: 24, textAlign: 'center', marginBottom: 20 },
	codeInput: {
		backgroundColor: '#fff',
		elevation: 10,
		borderRadius: 50,
		paddingVertical: 15,
		paddingHorizontal: 20,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
	},
	linkReferrals: {
		display: 'flex',
		justifyContent: 'center',
	},
	linkReferralsText: {
		textAlign: 'center',
		textDecorationLine: 'underline',
		textDecorationStyle: 'solid',
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
})
