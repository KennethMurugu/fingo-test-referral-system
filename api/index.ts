import axios from 'axios'
import { ImageSourcePropType } from 'react-native'

axios.defaults.baseURL = 'https://api-v1-staging-eks.fingo.africa/auth/fe_test'

export type Referral = {
	name: string // "Friend 1",
	email: string // "friend1@email.com",
	_id: string //"A friend1 id",
	username: string // "youguy",
	password: string // "password",
	referralCode: string // "fri111",
	claimedAt: string //"2020-01-01T00:00:00.000Z",
	profilePicture: string // "https://picsum.photos/200"
}

export function claimed_referrals() {
	return axios.get<{ data: Referral[] }>('/claimed_referrals')
}

export function redeem_referral(referral_code: string) {
	return axios.post<String>('/redeem_referral', { referral_code })
}
