import { Contact } from '../inteface/contact.interface'
import { ContactModel } from '../models/contact.model'

export const contactPutService = async (id: string, contact: Contact) =>
	await ContactModel.findOneAndUpdate({ id }, contact, { new: true })
