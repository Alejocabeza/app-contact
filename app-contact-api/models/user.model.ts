import { model, Schema } from 'mongoose'
import { User } from '../inteface/user.interface'

const UserSchema = new Schema<User>(
	{
		name: {
			type: String
		},
		email: {
			type: String,
			unique: true,
			required: true
		},
		phone: {
			type: String
		},
		avatar: {
			type: Boolean
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

export const UserModel = model('users', UserSchema)
