import { Response } from 'express'

export const handleResponse = (res: Response, code: any, data: any) => {
	res.status(code)
	res.json(data)
}
