import { ContactModel } from '../models/contact.model'

export const contactGetService = async (email: string) =>
	await ContactModel.find({ user: email })
