import { Contact } from '../../interface'
import { ContactModel } from '../../models'

export const contactGetAllService = async (email: string) =>
	await ContactModel.find({ user: email })

export const contactOneGetService = async (id: string) =>
	await ContactModel.find({ id })

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

export const contactPutService = async (id: string, contact: Contact) =>
	await ContactModel.findOneAndUpdate({ id }, contact, { new: true })

export const contactDeleteService = async (id: string) =>
	await ContactModel.remove({ _id: id })
