import { Response } from 'express'
import { RequestExt } from '../inteface'
import { contactGetAllService, contactOneGetService } from '../service'
import { handleResponse, handleResponseError } from '../utils'

export const contactGetAllController = async (
	req: RequestExt,
	res: Response
) => {
	try {
		const email = req.user?.paylod
		const contact = await contactGetAllService(email)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}

export const contactGetOneController = async (
	req: RequestExt,
	res: Response
) => {
	try {
		const { id } = req.params
		console.log(id)
		const contact = await contactOneGetService(id)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
