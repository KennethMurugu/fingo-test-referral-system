import React from 'react'
import { Text } from 'react-native'

function AppText(props: any) {
	return (
		<Text {...props} style={{ fontFamily: 'DMSans_700Bold', fontSize: 20, ...props.style }}>
			{props.children}
		</Text>
	)
}

export function BoldText(props: any) {
	return (
		<AppText {...props} style={{ fontFamily: 'DMSans_700Bold', ...props.style }}>
			{props.children}
		</AppText>
	)
}

export function RegularText(props: any) {
	return (
		<AppText {...props} style={{ fontFamily: 'DMSans_400Regular', ...props.style }}>
			{props.children}
		</AppText>
	)
}
