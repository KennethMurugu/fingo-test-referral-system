import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, Share, StyleSheet, Image, Pressable, ImageSourcePropType } from 'react-native'
import { claimed_referrals, Referral } from '../api'
import { BoldText } from '../components/AppText'

const onShare = async () => {
	try {
		const result = await Share.share({
			message: `Visit https://fingo.africa and use my code getin123`,
		})
		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		console.error(error)
	}
}

export default function ReferralScreen() {
	return (
		<View style={pageStyles.page}>
			<View style={pageStyles.header}>
				<BtnShareCode></BtnShareCode>

				<View style={infoStyles.wrapper}>
					<Image source={require('../assets/ic-share.png')} />
					<BoldText style={infoStyles.text}>
						Share your code with friends so they can start using the app too!
					</BoldText>
					<Image source={require('../assets/ic-friends.png')} />
				</View>
			</View>

			<ClaimedReferrals />
		</View>
	)
}
const pageStyles = StyleSheet.create({
	page: {
		backgroundColor: '#028E97',
		flex: 1,
	},
	header: {
		paddingHorizontal: 10,
		paddingTop: 30,
		backgroundColor: '#00666C',
		elevation: 5,
	},
})

const infoStyles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 30,
		paddingHorizontal: 10,
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		width: '60%',
		fontSize: 14,
	},
})

function BtnShareCode() {
	return (
		<Pressable style={btnShareCodeStyle.wrapper} onPress={onShare}>
			<BoldText style={btnShareCodeStyle.code}>getin123</BoldText>
			<BoldText style={btnShareCodeStyle.share}>Tap to share</BoldText>
		</Pressable>
	)
}

const btnShareCodeStyle = StyleSheet.create({
	wrapper: {
		backgroundColor: '#72F27F',
		borderRadius: 5,
		width: '100%',
		// flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 20,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		elevation: 5,
		//  marginHorizontal: ,
	},
	code: {
		marginBottom: 10,
		textAlign: 'center',
		fontSize: 30,
	},
	share: {
		textAlign: 'center',
		color: '#fff',
	},
})

function ClaimedReferrals() {
	// const referralItems: typeof ReferralItem[] = []

	const [referralItems, setreferralItems] = useState<JSX.Element[]>([])

	async function getClaimedReferrals() {
		const response = await claimed_referrals()

		// console.log(data)
		response.data.data.map((referral) => {
			const r = <ReferralItem />
			referralItems.push(r)
			setreferralItems([...referralItems])
		})
	}

	getClaimedReferrals()

	return (
		<View style={claimedReferralsStyles.wrapper}>
			<BoldText style={claimedReferralsStyles.headerText}>Claimed Referrals</BoldText>

			{referralItems}
		</View>
	)
}
const claimedReferralsStyles = StyleSheet.create({
	wrapper: {
		padding: 10,
	},
	headerText: {
		color: '#fff',
		fontSize: 20,
	},
})

function ReferralItem(): JSX.Element {
	// const referral: Referral = props.referral
	return <View>{/* <Image source={referral.profilePicture} /> */}</View>
}
