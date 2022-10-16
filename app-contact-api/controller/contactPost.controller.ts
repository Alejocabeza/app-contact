import { Response } from 'express'
import { RequestExt } from '../inteface/request.interface'
import { contactPostService } from '../service/contactPost.service'
import { handleResponseError } from '../utils/reponse.error.handle'
import { handleResponse } from '../utils/response.handle'

export const contactPostController = async (req: RequestExt, res: Response) => {
	try {
		const email = req.user?.paylod
		const body = req.body
		const contact = await contactPostService(email, body)
		handleResponse(res, 201, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
