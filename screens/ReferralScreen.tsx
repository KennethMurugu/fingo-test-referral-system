import React from 'react'
import { View, Text, Share } from 'react-native'

export default function ReferralScreen() {
	const onShare = async () => {
		try {
			const result = await Share.share({
				message: 'React Native | A framework for building native apps using React',
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
	return (
		<View>
			<Text>ReferralScreen</Text>
		</View>
	)
}
