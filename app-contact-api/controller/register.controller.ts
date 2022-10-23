import { Request, Response } from 'express'
import { registerService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

export const registerCtrl = async (req: Request, res: Response) => {
	try {
		const body = req.body
		const user = await registerService(body)
		handleResponse(res, 201, user)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
