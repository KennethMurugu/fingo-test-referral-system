import React from 'react'
import { View, Text, Share, Button } from 'react-native'

export default function WaitingRoom() {
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
			<Button title="Share" onPress={onShare}></Button>
		</View>
	)
}
