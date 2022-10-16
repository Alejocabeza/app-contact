import { UserModel } from '../models/user.model'

export const userGetService = async (email: string) =>
	await UserModel.findOne({ email })
