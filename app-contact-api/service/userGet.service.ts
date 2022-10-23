import { UserModel } from '../models'

export const userGetService = async (email: string) =>
	await UserModel.findOne({ email })
