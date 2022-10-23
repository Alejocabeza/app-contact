import { Contact } from '../inteface'
import { ContactModel } from '../models'

export const contactPutService = async (id: string, contact: Contact) =>
	await ContactModel.findOneAndUpdate({ id }, contact, { new: true })
