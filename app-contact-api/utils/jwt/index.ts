import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET

export const generateToken = (paylod: string) =>
	sign({ paylod }, <string>JWT_SECRET, { expiresIn: '2h' })

export const verifyToken = (jwt: string) => verify(jwt, <string>JWT_SECRET)
