import { Request, Response } from 'express'
import { RequestExt } from '../../interface'
import {
	contactDeleteService,
	contactGetAllService,
	contactOneGetService,
	contactPostService,
	contactPutService
} from '../../service'
import { handleResponse, handleResponseError } from '../../utils'

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
		const contact = await contactOneGetService(id)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}

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

export const contactDeleteController = (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const contact = contactDeleteService(id)
		handleResponse(res, 200, contact)
	} catch (e) {
		handleResponseError(res, 400, e)
	}
}
