import { model, Schema } from 'mongoose'
import { Contact } from '../../interface'

const ContactSchema = new Schema<Contact>(
	{
		name: {
			type: String
		},
		email: {
			type: String,
			unique: true
		},
		phone: {
			type: String
		},
		avatar: {
			type: Boolean,
			default: false
		},
		alias: {
			type: String
		},
		user: {
			type: String
		}
	},
	{
		versionKey: false,
		timestamps: true
	}
)

export const ContactModel = model('contacts', ContactSchema)
