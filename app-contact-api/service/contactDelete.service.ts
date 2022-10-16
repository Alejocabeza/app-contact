import { ContactModel } from '../models/contact.model'

export const contactDeleteService = async (id: string) =>
	await ContactModel.remove({ _id: id })
