import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { View, Text, Share, StyleSheet, Image, Pressable, ImageSourcePropType, ScrollView } from 'react-native'
import { claimed_referrals, Referral } from '../api'
import { BoldText, RegularText } from '../components/AppText'

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
	const [referralItems, setreferralItems] = useState<JSX.Element[]>([])

	function getReferralsLeft() {
		const maxReferrals = 5
		return Math.max(0, maxReferrals - referralItems.length) //prevent negative
	}

	useEffect(() => {
		getClaimedReferrals()
	}, [])

	async function getClaimedReferrals() {
		// setreferralItems(() => [])
		const response = await claimed_referrals()

		const items: JSX.Element[] = []
		response.data.data.map((referral) => {
			items.push(<ReferralItem referral={referral} key={referral._id} />)
		})
		setreferralItems(items)
	}

	return (
		<View style={claimedReferralsStyles.wrapper}>
			<View style={claimedReferralsStyles.headerWrapper}>
				<BoldText style={claimedReferralsStyles.headerText}>Claimed Referrals</BoldText>
				<BoldText style={claimedReferralsStyles.referralsLeft}>{getReferralsLeft()} referrals left</BoldText>
			</View>

			<View>{referralItems}</View>
		</View>
	)
}
const claimedReferralsStyles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
	headerWrapper: {
		marginBottom: 20,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		fontSize: 20,
		marginRight: 10,
	},
	referralsLeft: {
		backgroundColor: '#3FCAF5',
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
	referralsList: {
		display: 'flex',
		flexDirection: 'column',
	},
})

function ReferralItem(props: any) {
	const referral: Referral = props.referral

	function formateClaimedAt(claimedAt: string) {
		return dayjs(claimedAt).format('hh:mm A D MMM YYYY')
	}

	return (
		<View style={referralItemStyle.wrapper}>
			<Image
				style={referralItemStyle.profilePicture}
				source={{ uri: referral.profilePicture, width: 50, height: 50 }}
			/>

			<View>
				<BoldText>{referral.name}</BoldText>
				<RegularText style={referralItemStyle.claimedAt}>{formateClaimedAt(referral.claimedAt)}</RegularText>
			</View>
		</View>
	)
}

const referralItemStyle = StyleSheet.create({
	wrapper: {
		// borderWidth: 1,
		// borderColor: 'red',
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginBottom: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.075)',
		borderRadius: 5,
		display: 'flex',
		flexDirection: 'row',
	},
	profilePicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
		// borderWidth: 1,
		// borderColor: 'blue',
		marginRight: 15,
	},
	claimedAt: {
		color: '#cecece',
		fontSize: 16,
	},
})
