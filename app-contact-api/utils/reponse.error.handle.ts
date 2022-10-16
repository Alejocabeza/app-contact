import { Response } from 'express'

export const handleResponseError = (res: Response, code: any, data: any) => {
	const error = {
		code,
		data
	}
	res.status(code)
	res.json(error)
}
