import { Request, Response } from 'express'
import { contactPutService } from '../service/contactPut.service'
import { handleResponseError } from '../utils/reponse.error.handle'
import { handleResponse } from '../utils/response.handle'

export const contactPutController = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const body = req.body
		const contact = await contactPutService(id, body)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
