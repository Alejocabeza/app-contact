import { NextFunction, Response } from 'express'
import { RequestExt } from '../inteface'
import { handleResponse, handleResponseError, verifyToken } from '../utils'

export const session = (req: RequestExt, res: Response, next: NextFunction) => {
	try {
		const jwtByUser = req.headers.authorization || ''
		const jwt = jwtByUser.split(' ').pop()
		const isUser = verifyToken(`${jwt}`) as { email: string }
		if (!isUser) handleResponse(res, 401, 'INVALID_TOKEN')
		req.user = isUser
		next()
	} catch (e) {
		handleResponseError(res, 400, 'INVALID_SESSION')
	}
}
