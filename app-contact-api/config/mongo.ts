import 'dotenv/config'
import { connect } from 'mongoose'

const { MONGO_TEST, MONGO, NODE_ENV } = process.env
const DATABASE = NODE_ENV === 'test' ? MONGO_TEST : MONGO

export const dbConnect = async (): Promise<void> => {
	const DB_URI = <string>DATABASE
	await connect(DB_URI)
}
