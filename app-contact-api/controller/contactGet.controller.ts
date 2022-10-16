import { Response } from 'express'
import { RequestExt } from '../inteface/request.interface'
import { contactGetService } from '../service/contactGet.service'
import { handleResponseError } from '../utils/reponse.error.handle'
import { handleResponse } from '../utils/response.handle'

export const contactGetController = async (req: RequestExt, res: Response) => {
	try {
		const email = req.user?.paylod
		const contact = await contactGetService(email)
		handleResponse(res, 201, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
