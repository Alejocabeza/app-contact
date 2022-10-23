import { Contact } from '../inteface'
import { ContactModel } from '../models'

export const contactPostService = async (
	userEmail: string,
	contact: Contact
) => {
	const checkEmail = await ContactModel.findOne({
		email: contact.email,
		phone: contact.phone
	})
	if (checkEmail) throw 'THIS_CONTACT_ALREADY_EXIST'

	return await ContactModel.create({
		name: contact.name,
		email: contact.email,
		phone: contact.phone,
		avatar: contact.avatar,
		alias: contact.alias,
		user: userEmail
	})
}
