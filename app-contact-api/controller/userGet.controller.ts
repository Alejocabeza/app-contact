import { Response } from 'express'
import { RequestExt } from '../inteface/request.interface'
import { userGetService } from '../service/userGet.service'
import { handleResponseError } from '../utils/reponse.error.handle'
import { handleResponse } from '../utils/response.handle'

export const userGetController = async (req: RequestExt, res: Response) => {
	try {
		const email = req.user?.paylod
		const user = await userGetService(email)
		handleResponse(res, 200, user)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
