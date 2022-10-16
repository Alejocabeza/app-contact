import { Request, Response } from 'express'
import { contactDeleteService } from '../service/contactDelete.service'
import { handleResponseError } from '../utils/reponse.error.handle'
import { handleResponse } from '../utils/response.handle'

export const contactDeleteController = (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const contact = contactDeleteService(id)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
