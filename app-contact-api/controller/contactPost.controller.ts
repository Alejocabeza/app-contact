import { Response } from 'express'
import { RequestExt } from '../inteface'
import { contactPostService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

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
