import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export function AppTextInput(props: any) {
	return <TextInput {...props} style={{ ...style.input, ...props.style }} placeholder={props.placeholder} />
}

const style = StyleSheet.create({
	input: {
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
})
