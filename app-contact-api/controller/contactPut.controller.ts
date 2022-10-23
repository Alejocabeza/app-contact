import { Request, Response } from 'express'
import { contactPutService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

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
