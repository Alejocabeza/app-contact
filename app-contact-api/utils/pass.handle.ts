import { compare, hash } from 'bcryptjs'

export const passEncrypt = async (pass: string) => await hash(pass, 10)
export const passVerified = async (pass: string, has: string) =>
	await compare(pass, has)
