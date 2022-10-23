import { Request, Response } from 'express'
import { contactDeleteService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

export const contactDeleteController = (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const contact = contactDeleteService(id)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
