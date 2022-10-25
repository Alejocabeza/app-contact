import { Response } from 'express'

export const handleResponseError = (res: Response, code: any, data: any) => {
	const error = {
		code,
		data
	}
	res.status(code)
	res.json(error)
}

export const handleResponse = (res: Response, code: any, data: any) => {
	res.status(code)
	res.json(data)
}
