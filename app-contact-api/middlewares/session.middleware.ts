import { NextFunction, Response } from 'express'
import { RequestExt } from '../inteface/request.interface'
import { verifyToken } from '../utils/jwt.handle'
import { handleResponse } from '../utils/response.handle'

export const session = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtByUser = req.headers.authorization || ''
		const jwt = jwtByUser.split(' ').pop()
		const isUser = verifyToken(`${jwt}`) as { email: string }
		if (!isUser) handleResponse(res, 401, 'INVALID_TOKEN')
		req.user = isUser
		next()
	} catch (e) {
		handleResponse(res, 400, 'INVALID_SESSION')
	}
}
