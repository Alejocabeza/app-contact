import 'dotenv/config'
import { Router } from 'express'
import { readdirSync } from 'fs'

const VERSION = process.env.VERSION
const PATH_ROUTER = `${__dirname}`
const router = Router()

/**
 * @return string
 */
const cleanFileName = (fileName: string) => {
	const file = fileName.split('.').shift()
	return file
}

/**
 * @return Router
 */
readdirSync(PATH_ROUTER).filter(fileName => {
	const cleanName = cleanFileName(fileName)
	if (cleanName !== 'index') {
		import(`./${cleanName}`).then(moduleRouter =>
			router.use(`/api/${VERSION}/${cleanName}`, moduleRouter.router)
		)
	}
})

export { router }
