import { Auth, User } from '../../interface'
import { UserModel } from '../../models'
import { generateToken, passEncrypt, passVerified } from '../../utils'

export const registerService = async (user: User) => {
	const checkEmail = await UserModel.findOne({ email: user.email })
	if (checkEmail) throw 'USER_ALREADY_EXIST'

	const passhas = await passEncrypt(user.password)

	const newUser = await UserModel.create({
		name: user.name,
		email: user.email,
		phone: user.phone,
		avatar: user.avatar,
		password: passhas
	})

	const token = generateToken(newUser.email)

	return { token, user: newUser }
}

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
