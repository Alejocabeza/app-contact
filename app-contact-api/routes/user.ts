import { Router } from 'express'
import { userGetController } from '../controller/userGet.controller'
import { session } from '../middlewares/session.middleware'

const router = Router()

router.get('/', session, userGetController)

export { router }
