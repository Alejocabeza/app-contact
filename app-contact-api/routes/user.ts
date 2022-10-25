import { Router } from 'express'
import { userGetController } from '../controller'
import { session } from '../middlewares/session'

const router = Router()

router.get('/', session, userGetController)

export { router }
