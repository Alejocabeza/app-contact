import { Auth } from '../inteface/auth.interface'
import { UserModel } from '../models/user.model'
import { generateToken } from '../utils/jwt.handle'
import { passVerified } from '../utils/pass.handle'

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
