import { Response } from 'express'
import { RequestExt } from '../inteface'
import { userGetService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

export const userGetController = async (req: RequestExt, res: Response) => {
	try {
		const email = req.user?.paylod
		const user = await userGetService(email)
		handleResponse(res, 200, user)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
