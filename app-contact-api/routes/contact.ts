import { Router } from 'express'
import {
	contactDeleteController,
	contactGetAllController,
	contactGetOneController,
	contactPostController,
	contactPutController
} from '../controller'
import { session } from '../middlewares/session'

const router = Router()

router.get('/', session, contactGetAllController)
router.get('/:id', session, contactGetOneController)
router.post('/', session, contactPostController)
router.put('/:id', session, contactPutController)
router.delete('/:id', session, contactDeleteController)

export { router }
