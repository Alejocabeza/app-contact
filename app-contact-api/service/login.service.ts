import { Auth } from '../inteface'
import { UserModel } from '../models'
import { generateToken, passVerified } from '../utils'

export const loginService = async (auth: Auth) => {
	const user = await UserModel.findOne({ email: auth.email })
	if (!user) throw 'USER_NOT_ALREADY'

	const checkPass = await passVerified(auth.password, user.password)
	if (!checkPass) throw 'PASSWORD_INCORRECT'

	const token = generateToken(user.email)

	return {
		token,
		user
	}
}
