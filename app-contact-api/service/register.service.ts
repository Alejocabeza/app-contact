import { User } from '../inteface'
import { UserModel } from '../models'
import { generateToken, passEncrypt } from '../utils'

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
