import { ContactModel } from '../models'

export const contactDeleteService = async (id: string) =>
	await ContactModel.remove({ _id: id })
