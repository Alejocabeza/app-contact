import { User } from '../inteface/user.interface'
import { UserModel } from '../models/user.model'
import { passEncrypt } from '../utils/pass.handle'

export const registerService = async (user: User) => {
	const checkEmail = await UserModel.findOne({ email: user.email })
	if (checkEmail) throw 'USER_ALREADY_EXIST'

	const passhas = await passEncrypt(user.password)

	return await UserModel.create({
		name: user.name,
		email: user.email,
		phone: user.phone,
		avatar: user.avatar,
		password: passhas
	})
}
