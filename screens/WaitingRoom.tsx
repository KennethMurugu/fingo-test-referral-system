import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Image, StyleSheet, TextInput, KeyboardAvoidingView, Pressable, ScrollView } from 'react-native'
import { BoldText, RegularText } from '../components/AppText'

export default function WaitingRoom({ navigation }: any) {
	return (
		<ScrollView style={pageStyles.page}>
			<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={0}>
				<View style={logoHeaderStyles.wrapper}>
					<View style={logoHeaderStyles.imageContainer}>
						<Image style={logoHeaderStyles.logo} source={require('../assets/logo-fingo-small.png')} />
					</View>
					<BoldText style={logoHeaderStyles.logoText}>Fingo Africa</BoldText>
				</View>

				<View style={waitingTextStyles.wrapper}>
					<View style={waitingTextStyles.iconContainer}>
						<Image style={waitingTextStyles.icon} source={require('../assets/exclamation2.png')} />
					</View>

					<RegularText style={waitingTextStyles.waitingText}>
						You are
						{'\n'}
						<BoldText style={waitingTextStyles.waitingPosition}>5th</BoldText>
						{'\n'}
						in the waiting list
					</RegularText>
				</View>

				<BoldText style={referralStyles.textReferral}>Enter a referral code to start using the app.</BoldText>
				<TextInput style={referralStyles.codeInput} placeholder="Referral code" />

				<Pressable onPress={() => navigation.navigate('ReferralScreen')}>
					<BoldText style={referralStyles.linkReferralsText}>Share my referral code</BoldText>
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
		// fontWeight: 'bold',
	},
})

const referralStyles = StyleSheet.create({
	wrapper: {
		textAlign: 'center',
	},
	textReferral: { color: '#fff', fontSize: 24, textAlign: 'center', marginBottom: 30 },
	codeInput: {
		backgroundColor: '#fff',
		elevation: 10,
		borderRadius: 50,
		paddingVertical: 15,
		paddingHorizontal: 20,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 50,
		marginHorizontal: 10,
		fontFamily: 'DMSans_400Regular',
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
	},
})
