import { ContactModel } from '../models'

export const contactGetAllService = async (email: string) =>
	await ContactModel.find({ user: email })

export const contactOneGetService = async (id: string) =>
	await ContactModel.find({ id })
