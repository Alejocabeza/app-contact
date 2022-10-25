import { Request, Response } from 'express'
import { loginService, registerService } from '../../service'
import { handleResponse, handleResponseError } from '../../utils'

export const registerCtrl = async (req: Request, res: Response) => {
	try {
		const body = req.body
		const user = await registerService(body)
		handleResponse(res, 201, user)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}

export const loginCtrl = async (req: Request, res: Response) => {
	try {
		const body = req.body
		const session = await loginService(body)
		handleResponse(res, 200, session)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
